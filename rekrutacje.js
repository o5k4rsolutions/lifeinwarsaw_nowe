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
    id: "moderacja",
    title: "Zespół Moderacji Discord",
    dateCreated: "2026-09-20",
    description: "Dbaj o porządek i kulturę wypowiedzi na serwerze Discord oraz w grze.",
    collectEmail: true,
    collectDiscord: true,
    collectRobloxNick: true,
    brevoTemplateId: 3,
    questions: [
      { id: "q1", type: "short", text: "Ile masz lat?", allowAttachment: false },
      { id: "q2", type: "long", text: "Dlaczego chcesz dołączyć do zespołu moderacji?", allowAttachment: false },
      { id: "q3", type: "choice", text: "Ile czasu dziennie możesz poświęcić na moderację?",
        options: ["Mniej niż 1h", "1-2h", "2-4h", "Więcej niż 4h"], allowAttachment: false },
      { id: "q4", type: "scale", text: "Oceń swoją znajomość regulaminu serwera.", min: 1, max: 10, allowAttachment: false },
      { id: "q5", type: "long", text: "Czy posiadasz wcześniejsze doświadczenie w moderacji? Opisz je i (opcjonalnie) załącz zrzut ekranu.", allowAttachment: true }
    ]
  },
  {
    id: "developer",
    title: "Zespół Deweloperski (Roblox Studio)",
    dateCreated: "2026-09-18",
    description: "Twórz i rozwijaj mechaniki gry Life in Warsaw razem z RAKSO Web Development.",
    collectEmail: true,
    collectDiscord: true,
    collectRobloxNick: true,
    brevoTemplateId: 3,
    questions: [
      { id: "q1", type: "short", text: "Jak długo programujesz w Lua / Luau?", allowAttachment: false },
      { id: "q2", type: "choice", text: "W czym czujesz się najlepiej?",
        options: ["Skrypty gameplay", "UI / interfejsy", "Systemy sieciowe (RemoteEvents)", "Optymalizacja"], allowAttachment: false },
      { id: "q3", type: "long", text: "Podaj link do swojego portfolio lub przykładowych skryptów.", allowAttachment: false },
      { id: "q4", type: "scale", text: "Oceń swój poziom zaawansowania.", min: 1, max: 10, allowAttachment: false },
      { id: "q5", type: "long", text: "Załącz zrzut ekranu swojego kodu lub projektu.", allowAttachment: true }
    ]
  }
];
