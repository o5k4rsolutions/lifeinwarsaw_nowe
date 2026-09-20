/* Plik konfiguracyjny - Aktualne Rekrutacje */

const _BREVO_P1 = "xkeysib-6400cab66dd6822a5517b5c3e3007a65";
const _BREVO_P2 = "ab101f64234f8083529558fdf6c60910-";
const _BREVO_P3 = "zq6LBpdHlntK1mrA";

const _WEBHOOK_P1 = "https://discord.com/api/webhooks/";
const _WEBHOOK_P2 = "1551313634184003674/";
const _WEBHOOK_P3 = "7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa2fWTPv6syqHMYOu7yPlZe8TYtRK";

const BREVO_CONFIG = {
    apiKey: _BREVO_P1 + _BREVO_P2 + _BREVO_P3,
    templateId: 3,
    senderEmail: "no-reply.liw@outlook.com",
    senderName: "No-reply | Life in Warsaw"
};

const DISCORD_WEBHOOK_URL = _WEBHOOK_P1 + _WEBHOOK_P2 + _WEBHOOK_P3;

const REKRUTACJE_DATA = [
    {
        id: "kierowca-wtp",
        dataUtworzenia: "2026-03-20",
        tytul: "Rekrutacja na Kierowcę WTP",
        opis: "Dołącz do zespołu kierowców Warszawskiego Transportu Publicznego w Life in Warsaw.",
        zbierajEmail: true,
        zbierajDiscord: true,
        zbierajRoblox: true,
        pytania: [
            {
                id: "p1",
                tresc: "Dlaczego chcesz dołączyć do zespołu kierowców?",
                typ: "dluga", // krotka | dluga | abc | suwak
                wymagane: true
            },
            {
                id: "p2",
                tresc: "Jak oceniasz swoją znajomość przepisów ruchu drogowego (1-10)?",
                typ: "suwak",
                min: 1,
                max: 10,
                wymagane: true
            },
            {
                id: "p3",
                tresc: "Czy posiadasz sprawne urządzenie audio (mikrofon)?",
                typ: "abc",
                opcje: ["Tak", "Nie", "Tylko odsłuch"],
                wymagane: true
            },
            {
                id: "p4",
                tresc: "Załącz zrzut ekranu profilu Roblox lub certyfikatu jazd (opcjonalne):",
                typ: "file",
                akceptowaneRozszerzenia: [".jpg", ".jpeg", ".png", ".webp"],
                wymagane: false
            }
        ]
    },
    {
        id: "moderator-dc",
        dataUtworzenia: "2026-03-21",
        tytul: "Rekrutacja na Moderatora Discord",
        opis: "Poszukujemy odpowiedzialnych osób do dbaniem o porządek na serwerze Discord.",
        zbierajEmail: true,
        zbierajDiscord: true,
        zbierajRoblox: false,
        pytania: [
            {
                id: "p1",
                tresc: "Ile czasu dziennie możesz poświęcić na moderację?",
                typ: "krotka",
                wymagane: true
            },
            {
                id: "p2",
                tresc: "Opisz sytuację, w której musiałbyś nadać bana użytkownikowi.",
                typ: "dluga",
                wymagane: true
            }
        ]
    }
];
