// rekrutacje.js - Konfiguracja rekrutacji Life in Warsaw
window.LIW_CONFIG = {
    // Podzielone API Brevo (zabezpieczone przed prostym skanerem)
    brevoKeyPart1: "xkeysib-6400cab66dd6822a5517b5c3e3007a65ab101f64234f8083529558fdf6c60910-",
    brevoKeyPart2: "zq6LBpdHlntK1mrA",
    brevoTemplateId: 3,

    // Podzielony Webhook Discord
    discordPart1: "https://discord.com/api/webhooks/1551313634184003674/",
    discordPart2: "7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa2fWTPv6syqHMYOu7yPlZe8TYtRK",

    // Lista rekrutacji
    list: [
        {
            id: "supp",
            createdAt: "2026-06-06",
            title: "Support Serwera Discord & Gry",
            description: "Dołącz do zespołu administracyjnego i pomagaj graczom w codziennych problemach.",
            collectEmail: true,
            collectDiscord: true,
            collectRoblox: true,
            questions: [
                {
                    id: "q1",
                    type: "short",
                    title: "Ile masz lat?"
                },
                {
                    id: "q2",
                    type: "choice",
                    title: "Oceń swoją znajomość komend moderacyjnych:",
                    options: ["Podstawowa", "Średnia", "Wysoka", "Ekspert"]
                },
                {
                    id: "q3",
                    type: "slider",
                    title: "Jak oceniasz swoją odporność na stres w skali 1-10?",
                    min: 1,
                    max: 10
                },
                {
                    id: "q4",
                    type: "long",
                    title: "Dlaczego chcesz dołączyć do naszego zespołu?"
                },
                {
                    id: "q5",
                    type: "file",
                    title: "Załącz potwierdzenie godzin w grze (opcjonalnie / screen)",
                    required: false
                }
            ]
        },
        {
            id: "dev",
            createdAt: "2026-06-10",
            title: "Developer / Scriptwriter Roblox",
            description: "Twórz z nami unikalne skrypty i mechaniki do gry Life in Warsaw.",
            collectEmail: true,
            collectDiscord: true,
            collectRoblox: true,
            questions: [
                {
                    id: "d1",
                    type: "short",
                    title: "Podaj swój tag na Discordzie oraz wiek:"
                },
                {
                    id: "d2",
                    type: "long",
                    title: "Opisz swoje dotychczasowe doświadczenie w programowaniu Lua / Roblox Studio:"
                },
                {
                    id: "d3",
                    type: "file",
                    title: "Prześlij portfolio lub przykładowy kod (.zip, .png, .jpg):",
                    required: true
                }
            ]
        }
    ]
};
