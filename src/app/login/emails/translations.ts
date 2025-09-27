// Email template translations
export const emailTranslations = {
  sk: {
    greeting: "Vážená pani doktorka, vážený pán doktor,",
    thankYou: "ďakujeme za váš záujem o prístup do",
    appName: "Nutricia I CASEBOOK",
    appDescription: "našej odbornej aplikácie určenej pre lekárov a zdravotníckych pracovníkov.",
    instruction: "Pre dokončenie registrácie a získanie plného prístupu k obsahu prosím kliknite na nasledujúci odkaz:",
    buttonText: "Dokončiť registráciu do Nutricia I CASEBOOK",
    linkNote: "(Tento odkaz je jedinečný a platí len pre vás.)",
    closing: "Veríme, že v aplikácii nájdete cenné informácie, ktoré vás obohatia vo vašej každodennej praxi.",
    signature: "Tím Nutricia I CASEBOOK",
    viewOnline: "Zobraziť e-mail online"
  },
  en: {
    greeting: "Dear Doctor,",
    thankYou: "thank you for your interest in accessing",
    appName: "Nutricia I CASEBOOK",
    appDescription: "our professional application designed for doctors and healthcare professionals.",
    instruction: "To complete your registration and gain full access to the content, please click on the following link:",
    buttonText: "Complete registration to Nutricia I CASEBOOK",
    linkNote: "(This link is unique and valid only for you.)",
    closing: "We believe you will find valuable information in the application that will enrich your daily practice.",
    signature: "Nutricia I CASEBOOK Team",
    viewOnline: "View email online"
  }
};

type EmailTranslations = typeof emailTranslations;
type Language = keyof EmailTranslations;
type TranslationKey = keyof EmailTranslations[Language];
