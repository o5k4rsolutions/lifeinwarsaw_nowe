/**
 * Typy pytań:
 *   "short"  -> krótka odpowiedź tekstowa (1 linia)
 *   "long"   -> długa odpowiedź tekstowa (textarea)
 *   "choice" -> odpowiedź A/B/C/D (pole "options")
 *   "scale"  -> suwak (pola "min" / "max", domyślnie 1-10)
 * Każde pytanie może mieć "allowAttachment: true" — wtedy
 * pod polem odpowiedzi pojawia się możliwość dołączenia pliku
 * (jpg, jpeg, png, webp).
 */

window.RECRUITMENTS = [
  {
    id: "23092026/739",
    title: "Deweloper w Life in Warsaw",
    dateCreated: "2026-09-23",
    description: "Twórz wspólnie z nami Life in Warsaw",
    collectEmail: true,
    collectDiscord: true,
    collectRobloxNick: true,
    brevoTemplateId: 3,
    questions: [
      { id: "q1", type: "short", text: "Ile masz lat?", allowAttachment: false },
      { id: "q2", type: "short", text: "Jak długo tworzysz w Roblox Studio?", allowAttachment: false },
      { id: "q3", type: "choice", text: "W czym czujesz się najlepiej?",
        options: ["Skrypty", "Mapa", "Animacje"], allowAttachment: false },
      { id: "q4", type: "choice", text: "Ile czasu dziennie możesz poświęcić na tworzenie gry?",
        options: ["Mniej niż 1h", "1-2h", "2-4h", "Więcej niż 4h"], allowAttachment: false },
      { id: "q5", type: "scale", text: "Oceń swój poziom zaawansowania.", min: 1, max: 10, allowAttachment: false },
      { id: "q6", type: "short", text: "Załącz zdjęcia swojego portfolio (WYMAGANE). Możesz też je krótko opisać.", allowAttachment: true }
    ]
  }
];
