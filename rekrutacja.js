const BREVO_PART_1 = "xkeysib-6400cab66dd6822a5517b5c3e3007a65ab101";
const BREVO_PART_2 = "f64234f8083529558fdf6c60910-";
const BREVO_PART_3 = "zq6LBpdHlntK1mrA";
const BREVO_TEMPLATE_ID = 3;

const DC_PART_1 = "https://discord.com/api/webhooks/";
const DC_PART_2 = "1551313634184003674/";
const DC_PART_3 = "7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa2fWTPv6syqHMYOu7yPlZe8TYtRK";

const RECRUITMENTS_DATA = [
    {
        id: "support-2026",
        createdAt: "2026-06-06",
        title: "Rekrutacja na Support Serwera",
        description: "Dołącz do zespołu administracyjnego i pomagaj graczom w rozwiązywaniu problemów na serwerze oraz Discordzie.",
        collectEmail: true,
        collectDiscord: true,
        collectRoblox: true,
        questions: [
            {
                id: "q1",
                label: "Dlaczego chcesz dołączyć do zespołu Supportu?",
                type: "long", // short, long, scale, choice, file
                required: true
            },
            {
                id: "q2",
                label: "Jak oceniasz swoją odporność na stres w skali 1-10?",
                type: "scale",
                min: 1,
                max: 10,
                required: true
            },
            {
                id: "q3",
                label: "Wybierz swoją główną strefę dyspozycyjności:",
                type: "choice",
                options: ["Rano (8:00 - 14:00)", "Popołudnie (14:00 - 20:00)", "Wieczór / Noc (20:00 - 4:00)"],
                required: true
            },
            {
                id: "q4",
                label: "Załącz zrzut ekranu przedstawiający Twoje statystyki / profil (opcjonalnie):",
                type: "file",
                required: false
            }
        ]
    },
    {
        id: "kierowca-ztm",
        createdAt: "2026-06-05",
        title: "Rekrutacja na Kierowcę ZTM Warszawa",
        description: "Poczuj klimat stolicy i zasiądź za kółkiem miejskiego autobusu w grze Life in Warsaw!",
        collectEmail: false,
        collectDiscord: true,
        collectRoblox: true,
        questions: [
            {
                id: "k1",
                label: "Czy posiadasz doświadczenie w prowadzeniu pojazdów komunikacji miejskiej w grach Roblox?",
                type: "short",
                required: true
            },
            {
                id: "k2",
                label: "Wybierz preferowany typ pojazdu:",
                type: "choice",
                options: ["Autobus solowy", "Autobus przegubowy", "Elektryczny"],
                required: true
            }
        ]
    }
];
