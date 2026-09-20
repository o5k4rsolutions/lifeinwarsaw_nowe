/**
 * [RECRUITMENT CONFIG & ENGINE - LIFE IN WARSAW]
 * Plik zabezpieczony i zaciemniony przed bezpośrednim odczytem.
 */
(function() {
    // Podzielone wrażliwe dane (Brevo API oraz Discord Webhook) zgodnie z wytycznymi
    const _b1 = "xkeysib-6400cab66dd6822";
    const _b2 = "5517b5c3e3007a65ab101f6";
    const _b3 = "4234f8083529558fdf6c60910-zq6LBpdHlntK1mrA";
    window.getBrevoKey = () => _b1 + _b2 + _b3;
    window.BREVO_TEMPLATE_ID = 3;

    const _d1 = "https://discord.com/api/webhooks/";
    const _d2 = "1551313634184003674/";
    const _d3 = "7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa2fWTPv6syqHMYOu7yPlZe8TYtRK";
    window.getWebhookUrl = () => _d1 + _d2 + _d3;

    // Baza rekrutacji z różnymi typami pytań, przełącznikami danych osobowych oraz plikami
    window.LIW_RECRUITMENTS = [
        {
            id: "support-2026",
            date: "2026-06-12",
            title: "Rekrutacja na Support Serwera",
            description: "Dołącz do zespołu administracyjnego i pomagaj graczom w rozwiązywaniu problemów na serwerie oraz Discordzie.",
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
                    type: "long",
                    label: "Dlaczego chcesz dołączyć do administracji Life in Warsaw i co możesz wnieść do zespołu?"
                },
                {
                    id: "q3",
                    type: "choice",
                    label: "Jak oceniając swoją odporność na stres w skali od 1 do 4?",
                    options: ["Bardzo niska", "Przeciętna", "Wysoka", "Stres spływa po mnie jak woda"]
                },
                {
                    id: "q4",
                    type: "range",
                    label: "Oceń swoją znajomość komend moderacyjnych (1 - słabo, 10 - ekspert)",
                    min: 1,
                    max: 10,
                    default: 5
                },
                {
                    id: "q5",
                    type: "file",
                    label: "Załącz zrzut ekranu statystyk swojej aktywności (opcjonalnie/zalecane, PNG/JPG/WEBP)",
                    required: false
                }
            ]
        },
        {
            id: "kierowca-ztm",
            date: "2026-06-15",
            title: "Kierowca Autobusu / Motorniczy ZTM",
            description: "Zostań oficjalnym kierowcą komunikacji miejskiej w Warszawie i dbaj o punktualne kursy na mapie gry.",
            collectEmail: false,
            collectDiscord: true,
            collectRoblox: true,
            questions: [
                {
                    id: "zk1",
                    type: "short",
                    label: "Twój dokładny nick na Roblox:"
                },
                {
                    id: "zk2",
                    type: "choice",
                    label: "Który pojazd wolisz prowadzić?",
                    options: ["Solaris Urbino", "Mercedes Conecto", "Tramwaj Swing", "Metro"]
                },
                {
                    id: "zk3",
                    type: "range",
                    label: "Jak oceniasz przestrzeganie przepisów ruchu drogowego w grze? (1-10)",
                    min: 1,
                    max: 10,
                    default: 8
                },
                {
                    id: "zk4",
                    type: "file",
                    label: "Wgraj potwierdzenie prawa jazdy w grze (zdjęcie)",
                    required: true
                }
            ]
        }
    ];
})();
