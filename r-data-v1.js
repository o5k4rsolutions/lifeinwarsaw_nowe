const RECRUITMENT_CONFIG = {
    brevoApiParts: ["xkeysib-6400cab66dd6822a5517b5c3e3007a65ab101f64234f8083529558fdf6c60910", "-zq6LBpdHlntK1mrA"],
    brevoTemplateId: 3,
    webhookParts: ["https://discord.com/api/webhooks/", "1551313634184003674/", "7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa2fWTPv6syqHMYOu7yPlZe8TYtRK"],
    
    // Lista rekrutacji
    items: [
        {
            id: "suport",
            createdAt: "2026-06-01",
            title: "Support Serwera",
            description: "Dołącz do zespołu administracyjnego i pomagaj graczom na serwerze oraz Discordzie.",
            collectEmail: true,
            collectDiscord: true,
            collectRoblox: true,
            questions: [
                {
                    id: "q1",
                    type: "short",
                    label: "Ile masz lat?",
                    required: true
                },
                {
                    id: "q2",
                    type: "long",
                    label: "Dlaczego chcesz dołączyć do naszego zespołu Supportu?",
                    required: true
                },
                {
                    id: "q3",
                    type: "choice",
                    label: "Jak oceniasz swoją odporność na stres w skali od 1 do 4?",
                    options: ["Bardzo niska", "Średnia", "Wysoka", "Pełna profesjonalna"],
                    required: true
                },
                {
                    id: "q4",
                    type: "range",
                    label: "Oceń swoją znajomość komend moderacyjnych (1-10):",
                    min: 1,
                    max: 10,
                    step: 1,
                    required: true
                },
                {
                    id: "q5",
                    type: "file",
                    label: "Załącz zrzut ekranu statystyk aktywności (opcjonalnie):",
                    accept: "image/png, image/jpeg, image/webp",
                    required: false
                }
            ]
        },
        {
            id: "kierowca",
            createdAt: "2026-06-05",
            title: "Kierowca / Pracownik MZK",
            description: "Zostań kierowcą komunikacji miejskiej w Warszawie i dbaj o punktualność kursów.",
            collectEmail: false,
            collectDiscord: true,
            collectRoblox: true,
            questions: [
                {
                    id: "kq1",
                    type: "short",
                    label: "Twój dokładny nick na Discordzie:",
                    required: true
                },
                {
                    id: "kq2",
                    type: "choice",
                    label: "Która linia autobusowa interesuje Cię najbardziej?",
                    options: ["Linia 180", "Linia 116", "Linia 503", "Dowolna / Rezerwa"],
                    required: true
                }
            ]
        }
    ]
};
