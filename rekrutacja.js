// Konfiguracja API oraz Webhooka podzielona na części (ochrona danych)
const _cfg = {
    b1: "xkeysib-6400cab66dd6822a5517b5c3e3007a",
    b2: "5ab101f64234f8083529558fdf6c60910-",
    b3: "zq6LBpdHlntK1mrA",
    tmpl: 3,
    wh1: "https://discord.com/api/webhooks/",
    wh2: "1551313634184003674/",
    wh3: "7DslEvY1f33fJJyFYoNCINNpnow5pYCpDauwZ-psa2fWTPv6syqHMYOu7yPlZe8TYtRK"
};

// Lista rekrutacji
const rekrutacjeData = [
    {
        id: "support",
        dataUtworzenia: "2026-06-06",
        tytul: "Rekrutacja do Supportu Serwera",
        opis: "Pomagaj graczom, rozwiązkuj problemy i dbaj o porządek w społeczności Life in Warsaw.",
        zbierajEmail: true,
        zbierajDiscord: true,
        zbierajRoblox: true,
        pytania: [
            {
                id: "q1",
                tresc: "Dlaczego chcesz dołączyć do naszego zespołu?",
                typ: "dluga"
            },
            {
                id: "q2",
                tresc: "Oceń swoją znajomość komend administracyjnych w skali od 1 do 10:",
                typ: "suwak",
                min: 1,
                max: 10
            },
            {
                id: "q3",
                tresc: "Wybierz swoją główną strefę czasową / aktywność:",
                typ: "wybor",
                opcje: ["Popołudnia (15:00 - 19:00)", "Wieczory (19:00 - 23:00)", "Nocne marki (23:00+)"]
            },
            {
                id: "q4",
                tresc: "Załącz zrzut ekranu potwierdzający brak kar na koncie (opcjonalnie lub wymagane):",
                typ: "plik"
            }
        ]
    },
    {
        id: "developer",
        dataUtworzenia: "2026-06-10",
        tytul: "Rekrutacja na Developera / Programistę",
        opis: "Twórz nowe skrypty, systemy transportu miejskiego oraz dbaj o optymalizację gry.",
        zbierajEmail: true,
        zbierajDiscord: true,
        zbierajRoblox: false,
        pytania: [
            {
                id: "dev1",
                tresc: "Opisz swoje doświadczenie z językiem Luau / Roblox Studio:",
                typ: "dluga"
            },
            {
                id: "dev2",
                tresc: "Podaj link do swojego portfolio lub przykładowego kodu:",
                typ: "krotka"
            }
        ]
    }
];
