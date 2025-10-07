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
                },
                caseForm: {

                    addCaseTitle: 'Pridať novú kazuistiku',
                    buttons: {
                        cancel: 'Zrušiť',
                        back: 'Späť',
                        submit: 'Odoslať',
                        continue: 'Pokračovať',
                        close: 'Zavrieť'
                    },
                    authorInfo: {
                        title: 'Základné údaje o autorovi',
                        nameLabel: 'Vaše meno',
                        namePlaceholder: 'MUDr. Ján Novák, PhD.',
                        specializationLabel: 'Vaša špecializácia',
                        specializationPlaceholder: 'Pediater',
                        workplaceLabel: 'Vaše pracovisko',
                        workplacePlaceholder: 'Univerzitná Nemocnica Bratislava'
                    },
                    caseInfo: {
                        title: 'Krok 1/6: Základné údaje prípadu',
                        caseNameLabel: 'Názov kazuistiky',
                        caseNamePlaceholder: 'Problémy so zažívaním dieťaťa po liečbe matky ATB',
                        patientAgeLabel: 'Vek pacienta v mesiacoch',
                        patientAgePlaceholder: '4',
                        genderLabel: 'Pohlavie',
                        genderMale: 'Chlapec',
                        genderFemale: 'Dievča',
                        affectedSystemsLabel: 'Postihnuté sústavy',
                        affectedSystemsOptions: {
                            digestive: 'Tráviaci trakt',
                            skin: 'Koža',
                            respiratory: 'Respiračný trakt'
                        }
                    },
                    examinationFindings: {
                        title: 'Krok 2/6: Vyšetrenie a nález',
                        familyHistoryLabel: 'Rodinná anamnéza',
                        familyHistoryOptions: {
                            no: 'Nie',
                            yes: 'Áno, výskyt v rodine'
                        },
                        microbiomeFactorsLabel: 'Faktory ovplyvňujúce mikrobióm',
                        microbiomeFactorsOptions: {
                            premature: 'Predčasne narodené dieťa',
                            cSection: 'Pôrod cisárskym rezom',
                            antibiotics: 'Užívanie antibiotík',
                            siblings: 'Súrodenci / Veľká domácnosť',
                            animals: 'Zvieratá',
                            motherAtb: 'Užívanie ATB u matky',
                            childAtb: 'Užívanie ATB u dieťaťa',
                            smoking: 'Fajčenie'
                        },
                        nutritionalHistoryLabel: 'Nutričná anamnéza',
                        nutritionalHistoryOptions: {
                            mm_no_elimination: 'MM (bez eliminačnej diéty matky)',
                            mm_with_elimination: 'MM (s eliminačnej diéty matky)',
                            standard_formula: 'Štandardná formula (značka)',
                            phf: 'pHF (značka)',
                            ehf: 'eHF (značka)',
                            aaf: 'AAF (značka)'
                        },
                        clinicalSymptomsLabel: 'Klinické symptómy',
                        clinicalSymptomsOptions: {
                            eczema: 'Ekzém',
                            atopicDermatitis: 'Atopická dermatitída',
                            urticaria: 'Urtikácia',
                            reflux: 'Reflux',
                            regurgitation: 'Regurgitácia',
                            colic: 'Kolika',
                            constipation: 'Zápcha',
                            bloodMucusInStool: 'Krv / Hlien v stolici',
                            diarrhea: 'Hnačka',
                            flatulence: 'Plynatosť',
                            dyschezia: 'Dyschézia',
                            hardStool: 'Tvrdá stolica',
                            wheezing: 'Sipot',
                            rhinitis: 'Nádcha',
                            respiratoryInfections: 'Respiračné infekcie',
                            failureToThrive: 'Neprospievanie'
                        },
                        otherSymptomsLabel: 'Iné symptómy / Poznámky',
                        otherSymptomsPlaceholder: 'Zadajte ďalšie symptómy alebo poznámky...'
                    },
                    diagnosis: {
                        title: 'Krok 3/6: Diagnóza',
                        diagnosisLabel: 'Diagnóza',
                        diagnosisPlaceholder: '2x UZ vyšetrenie pre vylúčenie pylorostenózy a invaginácie. Po zavedení Neocate Syneo rýchly ústup ťažkostí do 48 hodín...'
                    },
                    treatment: {
                        title: 'Krok 4/6: Liečba a prílohy',
                        usedProductLabel: 'Použitý produkt',
                        usedProductPlaceholder: 'Neocate Syneo',
                        treatmentDescriptionLabel: 'Popis liečby',
                        treatmentDescriptionPlaceholder: 'Popíšte liečbu',
                        attachmentsLabel: 'Prílohy'
                    },
                    summary: {
                        title: 'Krok 5/6: Súhrn',
                        caseNameLabel: 'Názov kazuistiky',
                        patientAgeLabel: 'Vek dieťaťa v mesiacoch',
                        patientAgeMonths: 'mesiace',
                        genderLabel: 'Pohlavie',
                        affectedSystemsLabel: 'Postihnuté sústavy',
                        familyHistoryLabel: 'Rodinná anamnéza',
                        microbiomeFactorsLabel: 'Faktory ovplyvňujúce mikrobióm',
                        nutritionalHistoryLabel: 'Nutričná anamnéza',
                        clinicalSymptomsLabel: 'Klinické symptómy',
                        diagnosisLabel: 'Diagnóza',
                        usedProductLabel: 'Použitý produkt',
                        treatmentDescriptionLabel: 'Popis liečby'
                    },
                    submission: {
                        title: 'Ďakujeme, Vaša kazuistika bola úspešne odoslaná na schválenie.',
                        message: 'Naši administrátori teraz podrobia Vašu kazuistiku kontrole. Pokiaľ bude všetko v poriadku, kazuistika bude publikovaná a dostupná k nahliadnutiu v našej aplikácii.'
                    },
                    validation: {
                        nameRequired: 'Vaše meno je povinné',
                        specializationRequired: 'Vaša špecializácia je povinná',
                        workplaceRequired: 'Vaše pracovisko je povinné',
                        caseNameMin: 'Názov kazuistiky musí mať aspoň 3 znaky',
                        patientAgeRequired: 'Vek pacienta je povinný',
                        genderRequired: 'Pohlavie je povinné',
                        affectedSystemsMin: 'Vyberte aspoň jeden postihnutý systém',
                        familyHistoryRequired: 'Rodinná anamnéza je povinná',
                        microbiomeFactorsMin: 'Vyberte aspoň jeden mikrobiómový faktor',
                        nutritionalHistoryRequired: 'Nutričná história je povinná',
                        clinicalSymptomsMin: 'Vyberte aspoň jeden klinický symptóm',
                        problemDescriptionMin: 'Popis problému musí mať aspoň 10 znakov',
                        diagnosisMin: 'Diagnóza musí mať aspoň 10 znakov',
                        usedProductRequired: 'Použitý produkt je povinný',
                        treatmentDescriptionMin: 'Popis liečby musí mať aspoň 10 znakov'
                    }
                },
                buttons: {
                    allCases: 'Všetky kazuistiky',
                    openCaseStudy: 'Otvoriť prípadovú štúdiu'
                },
                caseDetail: {
                    author: 'Autor',
                    specialization: 'Špecializácia',
                    workplace: 'Pracovisko',
                    patient: 'Pacient',
                    age: 'Vek',
                    gender: 'Pohlavie',
                    familyHistory: 'Rodinná anamnéza',
                    riskFactors: 'Rizikové faktory',
                    clinicalSymptoms: 'Klinické príznaky',
                    otherSymptoms: 'Iné symptómy',
                    usedProduct: 'Použitý produkt',
                    introduction: 'Úvod do problematiky',
                    patientManagement: 'Manažment pacienta',
                    nutritionalHistory: 'Nutričná anamnéza',
                    months: 'mesiac',
                    monthsPlural: 'mesiace',
                    genderMale: 'Chlapec',
                    genderFemale: 'Dievča'
                },
                header: {
                    productList: 'Zoznam produktov',
                    language: 'Jazyk',
                    logout: 'Odhlásiť'
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
                },
                caseForm: {
                    addCaseTitle: 'Přidat novou kazuistiku',
                    buttons: {
                        cancel: 'Zrušit',
                        back: 'Zpět',
                        submit: 'Odeslat',
                        continue: 'Pokračovat',
                        close: 'Zavřít'
                    },
                    authorInfo: {
                        title: 'Základní údaje o autorovi',
                        nameLabel: 'Vaše jméno',
                        namePlaceholder: 'MUDr. Jan Novák, PhD.',
                        specializationLabel: 'Vaše specializace',
                        specializationPlaceholder: 'Pediatr',
                        workplaceLabel: 'Vaše pracoviště',
                        workplacePlaceholder: 'Univerzitní Nemocnice Bratislava'
                    },
                    caseInfo: {
                        title: 'Krok 1/6: Základní údaje případu',
                        caseNameLabel: 'Název kazuistiky',
                        caseNamePlaceholder: 'Problémy se zažíváním dítěte po léčbě matky ATB',
                        patientAgeLabel: 'Věk pacienta v měsících',
                        patientAgePlaceholder: '4',
                        genderLabel: 'Pohlaví',
                        genderMale: 'Chlapec',
                        genderFemale: 'Dívka',
                        affectedSystemsLabel: 'Postižené soustavy',
                        affectedSystemsOptions: {
                            digestive: 'Trávicí trakt',
                            skin: 'Kůže',
                            respiratory: 'Respirační trakt'
                        }
                    },
                    examinationFindings: {
                        title: 'Krok 2/6: Vyšetření a nález',
                        familyHistoryLabel: 'Rodinná anamnéza',
                        familyHistoryOptions: {
                            no: 'Ne',
                            yes: 'Ano, výskyt v rodině'
                        },
                        microbiomeFactorsLabel: 'Faktory ovlivňující mikrobiom',
                        microbiomeFactorsOptions: {
                            premature: 'Předčasně narozené dítě',
                            cSection: 'Porod císařským řezem',
                            antibiotics: 'Užívání antibiotik',
                            siblings: 'Sourozenci / Velká domácnost',
                            animals: 'Zvířata',
                            motherAtb: 'Užívání ATB u matky',
                            childAtb: 'Užívání ATB u dítěte',
                            smoking: 'Kouření'
                        },
                        nutritionalHistoryLabel: 'Nutriční anamnéza',
                        nutritionalHistoryOptions: {
                            mm_no_elimination: 'MM (bez eliminační diety matky)',
                            mm_with_elimination: 'MM (s eliminační dietou matky)',
                            standard_formula: 'Standardní formule (značka)',
                            phf: 'pHF (značka)',
                            ehf: 'eHF (značka)',
                            aaf: 'AAF (značka)'
                        },
                        clinicalSymptomsLabel: 'Klinické symptomy',
                        clinicalSymptomsOptions: {
                            eczema: 'Ekzém',
                            atopicDermatitis: 'Atopická dermatitida',
                            urticaria: 'Kopřivka',
                            reflux: 'Reflux',
                            regurgitation: 'Regurgitace',
                            colic: 'Kolika',
                            constipation: 'Zácpa',
                            bloodMucusInStool: 'Krev / Hlen ve stolici',
                            diarrhea: 'Průjem',
                            flatulence: 'Plynatost',
                            dyschezia: 'Dyschezie',
                            hardStool: 'Tvrdá stolice',
                            wheezing: 'Sípání',
                            rhinitis: 'Rýma',
                            respiratoryInfections: 'Respirační infekce',
                            failureToThrive: 'Neprospívání'
                        },
                        otherSymptomsLabel: 'Jiné symptomy / Poznámky',
                        otherSymptomsPlaceholder: 'Zadejte další symptomy nebo poznámky...'
                    },
                    diagnosis: {
                        title: 'Krok 3/6: Diagnóza',
                        diagnosisLabel: 'Diagnóza',
                        diagnosisPlaceholder: '2x UZ vyšetření pro vyloučení pylorostenózy a invaginace. Po zavedení Neocate Syneo rychlý ústup potíží do 48 hodin...'
                    },
                    treatment: {
                        title: 'Krok 4/6: Léčba a přílohy',
                        usedProductLabel: 'Použitý produkt',
                        usedProductPlaceholder: 'Neocate Syneo',
                        treatmentDescriptionLabel: 'Popis léčby',
                        treatmentDescriptionPlaceholder: 'Popište léčbu',
                        attachmentsLabel: 'Přílohy'
                    },
                    summary: {
                        title: 'Krok 5/6: Souhrn',
                        caseNameLabel: 'Název kazuistiky',
                        patientAgeLabel: 'Věk dítěte v měsících',
                        patientAgeMonths: 'měsíce',
                        genderLabel: 'Pohlaví',
                        affectedSystemsLabel: 'Postižené soustavy',
                        familyHistoryLabel: 'Rodinná anamnéza',
                        microbiomeFactorsLabel: 'Faktory ovlivňující mikrobiom',
                        nutritionalHistoryLabel: 'Nutriční anamnéza',
                        clinicalSymptomsLabel: 'Klinické symptomy',
                        diagnosisLabel: 'Diagnóza',
                        usedProductLabel: 'Použitý produkt',
                        treatmentDescriptionLabel: 'Popis léčby'
                    },
                    submission: {
                        title: 'Děkujeme, Vaše kazuistika byla úspěšně odeslána ke schválení.',
                        message: 'Naši administrátoři nyní podrobí Vaši kazuistiku kontrole. Pokud bude vše v pořádku, kazuistika bude publikována a dostupná k nahlédnutí v naší aplikaci.'
                    },
                    validation: {
                        nameRequired: 'Vaše jméno je povinné',
                        specializationRequired: 'Vaše specializace je povinná',
                        workplaceRequired: 'Vaše pracoviště je povinné',
                        caseNameMin: 'Název kazuistiky musí mít alespoň 3 znaky',
                        patientAgeRequired: 'Věk pacienta je povinný',
                        genderRequired: 'Pohlaví je povinné',
                        affectedSystemsMin: 'Vyberte alespoň jeden postižený systém',
                        familyHistoryRequired: 'Rodinná anamnéza je povinná',
                        microbiomeFactorsMin: 'Vyberte alespoň jeden mikrobiomový faktor',
                        nutritionalHistoryRequired: 'Nutriční historie je povinná',
                        clinicalSymptomsMin: 'Vyberte alespoň jeden klinický symptom',
                        problemDescriptionMin: 'Popis problému musí mít alespoň 10 znaků',
                        diagnosisMin: 'Diagnóza musí mít alespoň 10 znaků',
                        usedProductRequired: 'Použitý produkt je povinný',
                        treatmentDescriptionMin: 'Popis léčby musí mít alespoň 10 znaků'
                    }
                },
                buttons: {
                    allCases: 'Všechny kazuistiky',
                    openCaseStudy: 'Otevřít případovou studii'
                },
                caseDetail: {
                    author: 'Autor',
                    specialization: 'Specializace',
                    workplace: 'Pracoviště',
                    patient: 'Pacient',
                    age: 'Věk',
                    gender: 'Pohlaví',
                    familyHistory: 'Rodinná anamnéza',
                    riskFactors: 'Rizikové faktory',
                    clinicalSymptoms: 'Klinické symptomy',
                    otherSymptoms: 'Jiné symptomy',
                    usedProduct: 'Použitý produkt',
                    introduction: 'Úvod do problematiky',
                    patientManagement: 'Manažment pacienta',
                    months: 'měsíc',
                    monthsPlural: 'měsíce',
                    genderMale: 'Chlapec',
                    genderFemale: 'Dívka'
                },
                header: {
                    productList: 'Seznam produktů',
                    language: 'Jazyk',
                    logout: 'Odhlásit'
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
