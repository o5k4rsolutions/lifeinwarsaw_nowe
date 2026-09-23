export const config = { api: { bodyParser: { sizeLimit: '20mb' } } };

function generateTicketId() {
    const stamp = Date.now().toString(36).toUpperCase();
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `LIW-${stamp}-${rand}`;
}

function base64ToBuffer(dataUrl) {
    const match = /^data:(.+);base64,(.*)$/.exec(dataUrl || '');
    if (!match) return null;
    return { mime: match[1], buffer: Buffer.from(match[2], 'base64') };
}

async function sendDiscordWebhook({ webhookUrl, ticketId, recruitmentTitle, contact, answers }) {
    const fields = [];
    if (contact.email) fields.push({ name: 'E-mail', value: contact.email, inline: true });
    if (contact.discord) fields.push({ name: 'Discord', value: contact.discord, inline: true });
    if (contact.robloxNick) fields.push({ name: 'Nick Roblox', value: contact.robloxNick, inline: true });

    answers.forEach((a, i) => {
        const val = String(a.value ?? '').slice(0, 1000) || '—';
        fields.push({ name: `${i + 1}. ${a.text}`.slice(0, 256), value: val });
    });

    const embed = {
        title: `Nowe zgłoszenie: ${recruitmentTitle}`,
        color: 0xff334b,
        fields,
        footer: { text: `Ticket: ${ticketId}` },
        timestamp: new Date().toISOString()
    };

    const form = new FormData();
    form.append('payload_json', JSON.stringify({ embeds: [embed] }));

    let fileIndex = 0;
    for (const a of answers) {
        if (a.file && a.file.data) {
            const decoded = base64ToBuffer(a.file.data);
            if (decoded) {
                form.append(`files[${fileIndex}]`, new Blob([decoded.buffer], { type: decoded.mime }), a.file.name || `zalacznik-${fileIndex}`);
                fileIndex++;
            }
        }
    }

    const res = await fetch(webhookUrl, { method: 'POST', body: form });
    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Discord webhook error (${res.status}): ${text}`);
    }
}

async function sendBrevoEmail({ apiKey, senderEmail, senderName, toEmail, templateId, params }) {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'api-key': apiKey
        },
        body: JSON.stringify({
            sender: { email: senderEmail, name: senderName },
            to: [{ email: toEmail }],
            templateId: Number(templateId) || 3,
            params
        })
    });
    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Brevo error (${res.status}): ${text}`);
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    try {
        const { recruitmentId, recruitmentTitle, brevoTemplateId, contact = {}, answers = [] } = req.body || {};

        if (!recruitmentId || !recruitmentTitle || !Array.isArray(answers)) {
            return res.status(400).json({ ok: false, error: 'Nieprawidłowe dane zgłoszenia.' });
        }

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        const brevoApiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'no-reply.liw@outlook.com';
        const senderName = process.env.BREVO_SENDER_NAME || 'No-reply | Life in Warsaw';

        if (!webhookUrl) {
            return res.status(500).json({ ok: false, error: 'Serwer nie jest skonfigurowany (brak DISCORD_WEBHOOK_URL).' });
        }

        const ticketId = generateTicketId();

        await sendDiscordWebhook({ webhookUrl, ticketId, recruitmentTitle, contact, answers });

        if (contact.email) {
            if (!brevoApiKey) {
                console.warn('BREVO_API_KEY nie ustawiony — pominięto wysyłkę e-maila.');
            } else {
                await sendBrevoEmail({
                    apiKey: brevoApiKey,
                    senderEmail,
                    senderName,
                    toEmail: contact.email,
                    templateId: brevoTemplateId || 3,
                    params: {
                        ROBLOX_USER: contact.robloxNick || contact.discord || '',
                        RECRUITMENT_TITLE: recruitmentTitle,
                        TICKET_ID: ticketId
                    }
                });
            }
        }

        return res.status(200).json({ ok: true, ticketId });
    } catch (err) {
        console.error('submit-recruitment error:', err);
        return res.status(500).json({ ok: false, error: 'Nie udało się przetworzyć zgłoszenia. Spróbuj ponownie później.' });
    }
}
