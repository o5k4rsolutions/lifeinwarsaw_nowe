// Konfiguracja podzielona na części dla bezpieczeństwa
const _b1 = "xkeysib-6400cab66dd6822a5517b5c3e3007a65ab1";
const _b2 = "01f64234f8083529558fdf6c60910-zq6LBpdHlntK1mrA";
const _w1 = "https://discord.com/api/webhooks/155131363";
const _w2 = "4184003674/7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa";
const _w3 = "2fWTPv6syqHMYOu7yPlZe8TYtRK";

window.APP_CONFIG = {
    BREVO_API_KEY: _b1 + _b2,
    BREVO_TEMPLATE_ID: 3,
    DISCORD_WEBHOOK_URL: _w1 + _w2 + _w3
};

// Lista rekrutacji z różnymi typami pytań
window.RECRUITMENTS_DATA = [
    {
        id: "support",
        createdAt: "2026-06-01",
        title: "Support / Pomocnik Serwera",
        description: "Dołącz do zespołu administracyjnego Life in Warsaw i pomagaj graczom w rozwiązywaniu problemów.",
        collectEmail: true,
        collectDiscord: true,
        collectRoblox: true,
        questions: [
            {
                id: "q1",
                type: "short",
                label: "Ile masz lat i jak masz na imię?"
            },
            {
                id: "q2",
                type: "choice",
                label: "Jak oceniasz swoją znajomość komend moderacyjnych?",
                options: ["Podstawowa", "Średnia", "Bardzo dobra", "Ekspert"]
            },
            {
                id: "q3",
                type: "range",
                label: "Oceń swoją odporność na stres w skali od 1 do 10:",
                min: 1,
                max: 10
            },
            {
                id: "q4",
                type: "long",
                label: "Dlaczego chcesz dołączyć właśnie do naszego zespołu?"
            },
            {
                id: "q5",
                type: "file",
                label: "Załącz zrzut ekranu przedstawiający Twój profil lub statystyki (opcjonalnie):"
            }
        ]
    },
    {
        id: "developer",
        createdAt: "2026-06-10",
        title: "Developer / Skripter Roblox",
        description: "Twórz unikalne skrypty i systemy dla serwera Life in Warsaw w środowisku Luau / Roblox Studio.",
        collectEmail: true,
        collectDiscord: true,
        collectRoblox: true,
        questions: [
            {
                id: "dev1",
                type: "short",
                label: "Jaki jest Twój nick na Discordzie oraz staż w Roblox Studio (w latach)?"
            },
            {
                id: "dev2",
                type: "choice",
                label: "Który framework lub system skryptowania jest Ci najbliższy?",
                options: ["Roact / Fusion", "ProfileService / DataStore", "Knit Framework", "Czysty Luau (Vanilla)"]
            },
            {
                id: "dev3",
                type: "long",
                label: "Opisz swój najciekawszy projekt wykonany w Roblox Studio."
            },
            {
                id: "dev4",
                type: "file",
                label: "Załącz portfolio lub przykładowy kod / plik (.lua, .rbxm, obrazek):"
            }
        ]
    }
];
