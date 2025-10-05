export const i18nConfig = {
    resources: {
        sk: {
            translation: {
                validation: {
                    email: {
                        required: 'Email je povinný',
                        invalid: 'Prosím zadajte platný email'
                    },
                    agreement: {
                        required: 'Musíte súhlasiť s podmienkami používania'
                    },
                    token: {
                        missing: 'Chýbajúci token pre overenie',
                        invalid: 'Neplatný alebo vypršaný token'
                    }
                },
                form: {
                    email: {
                        label: 'Emailová adresa'
                    },
                    agreement: {
                        label: 'Súhlasím s',
                        termsLink: 'podmienkami používania'
                    },
                    submit: {
                        continue: 'Pokračovať'
                    },
                    errors: {
                        sendFailed: 'Nepodarilo sa odoslať e-mail. Skúste to prosím znova.'
                    }
                },
                page: {
                    title: 'Prihláste sa do svojho účtu',
                    subtitle: "Zadajte svoju emailovú adresu a pošleme vám bezpečný prihlasovací odkaz."
                },
                verifyRequest: {
                    title: 'Skontrolujte svoj email',
                    subtitle: 'Prihlasovací odkaz bol odoslaný na vašu emailovú adresu. Prosím skontrolujte svoju schránku a kliknite na odkaz pre pokračovanie.'
                },
                auth: {
                    verification: {
                        loading: 'Overujeme váš prístup...',
                        wait: 'Prosím počkajte, zatiaľ čo overujeme váš token.',
                        failed: 'Chyba overenia',
                        error: 'Chyba pri overovaní tokenu',
                        successMessage: 'Úspešne ste sa prihlásili. Presmerúvame vás...',
                        invalidToken: 'Neplatný overovací token.',
                        expiredToken: 'Platnosť tokenu vypršala. Vyžiadajte si nový prihlasovací odkaz.',
                        genericError: 'Počas overovania tokenu sa vyskytla chyba.'
                    },
                    login: {
                        success: 'Úspešne ste sa prihlásili',
                        successful: 'Úspešné prihlásenie'
                    },
                    redirect: {
                        message: 'Presmerúvame vás na hlavnú stránku...'
                    },
                    back: {
                        login: 'Späť na prihlásenie'
                    }
                },
                email: {
                    greeting: "Vážená pani doktorka, vážený pán doktor,",
                    thankYou: "ďakujeme za váš záujem o prístup do",
                    appName: "Nutricia I CASEBOOK",
                    appDescription: "našej odbornej aplikácie určenej pre lekárov a zdravotníckych pracovníkov.",
                    instruction: "Pre dokončenie registrácie a získanie plného prístupu k obsahu prosím kliknite na nasledujúci odkaz:",
                    buttonText: "Dokončiť registráciu do Nutricia I CASEBOOK",
                    linkNote: "(Tento odkaz je jedinečný a platí len pre vás.)",
                    closing: "Veríme, že v aplikácii nájdete cenné informácie, ktoré vás obohatia vo vašej každodennej praxi.",
                    signature: "Tím Nutricia I CASEBOOK",
                    viewOnline: "Zobraziť e-mail online",
                    subject: 'Prístup do Nutricia | CASEBOOK'
                }
            }
        },
        cz: {
            translation: {
                validation: {
                    email: {
                        required: 'Email je povinný',
                        invalid: 'Prosím zadejte platný email'
                    },
                    agreement: {
                        required: 'Musíte souhlasit s podmínkami používání'
                    },
                    token: {
                        missing: 'Chybějící token pro ověření',
                        invalid: 'Neplatný nebo vypršaný token'
                    }
                },
                form: {
                    email: {
                        label: 'Emailová adresa'
                    },
                    agreement: {
                        label: 'Souhlasím s',
                        termsLink: 'podmínkami používání'
                    },
                    submit: {
                        continue: 'Pokračovat'
                    },
                    errors: {
                        sendFailed: 'Nepodařilo se odeslat e-mail. Zkuste to prosím znovu.'
                    }
                },
                page: {
                    title: 'Přihlaste se do svého účtu',
                    subtitle: "Zadejte svou emailovou adresu a pošleme vám bezpečný přihlašovací odkaz."
                },
                verifyRequest: {
                    title: 'Zkontrolujte svůj email',
                    subtitle: 'Přihlašovací odkaz byl odeslán na vaši emailovou adresu. Prosím zkontrolujte svou schránku a klikněte na odkaz pro pokračování.'
                },
                auth: {
                    verification: {
                        loading: 'Ověřujeme váš přístup...',
                        wait: 'Prosím počkejte, zatímco ověřujeme váš token.',
                        failed: 'Chyba ověření',
                        error: 'Chyba při ověřování tokenu',
                        successMessage: 'Úspěšně jste se přihlásili. Přesměrováváme vás...',
                        invalidToken: 'Neplatný ověřovací token.',
                        expiredToken: 'Platnost tokenu vypršela. Vyžádejte si nový přihlašovací odkaz.',
                        genericError: 'Během ověřování tokenu se vyskytla chyba.'
                    },
                    login: {
                        success: 'Úspešne ste sa prihlásili',
                        successful: 'Úspěšné přihlášení'
                    },
                    redirect: {
                        message: 'Přesměrováváme vás na hlavní stránku...'
                    },
                    back: {
                        login: 'Zpět na přihlášení'
                    }
                },
                email: {
                    greeting: "Vážená paní doktorko, vážený pane doktore,",
                    thankYou: "děkujeme za váš zájem o přístup do",
                    appName: "Nutricia I CASEBOOK",
                    appDescription: "naší odborné aplikace určené pro lékaře a zdravotnické pracovníky.",
                    instruction: "Pro dokončení registrace a získání plného přístupu k obsahu prosím klikněte na následující odkaz:",
                    buttonText: "Dokončit registraci do Nutricia I CASEBOOK",
                    linkNote: "(Tento odkaz je jedinečný a platí pouze pro vás.)",
                    closing: "Věříme, že v aplikaci naleznete cenné informace, které vás obohatí ve vaší každodenní praxi.",
                    signature: "Tým Nutricia I CASEBOOK",
                    viewOnline: "Zobrazit e-mail online",
                    subject: 'Přístup do Nutricia | CASEBOOK'
                }
            }
        }
    },
    fallbackLng: 'sk',
    interpolation: {
        escapeValue: false
    },
    keySeparator: '.',
    // nsSeparator: false,
    defaultNS: 'translation'
};
