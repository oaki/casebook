export const i18nConfig = {
    resources: {
        sk: {
            translation: {
                validation: {
                    email: {
                        required: 'Email je povinný',
                        invalid: 'Prosím, skontrolujte zadaný email'
                    },
                    agreement: {
                        required: 'Pre pokračovanie je potrebné odsúhlasiť podmienky používania'
                    },
                    token: {
                        missing: 'Chýbajúce údaje na overenie prihlásenia',
                        invalid: 'Neplatná authentikácia používateľa'
                    }
                },
                form: {
                    email: {
                        label: 'E-mailová adresa'
                    },
                    agreement: {
                        label: 'Súhlasím so',
                        termsLink: 'Všeobecnými podmienkami používania'
                    },
                    submit: {
                        continue: 'Pokračovať'
                    },
                    errors: {
                        sendFailed: 'Nepodarilo sa odoslať e-mail. Skúste to prosím znovu.'
                    }
                },
                page: {
                    title: 'Prihlásenie do aplikácie',
                    subtitle: "Vážená pani doktorka, vážený pán doktor, do aplikácie sa prihlásite zadaním svojej e-mailovej adresy."
                },
                verifyRequest: {
                    title: 'Skontrolujte svoj email',
                    subtitle: 'Kliknite na unikátny odkaz, ktorý sme poslali na Váš e-mail.'
                },
                auth: {
                    verification: {
                        loading: 'Overujeme prístup...',
                        wait: 'Prosím počkajte, overujeme Vaše prihlasovacie údaje.',
                        failed: 'Chyba overenia',
                        error: 'Chyba pri overovaní údajov',
                        successMessage: 'Vaše prihlásenie bolo úspešné, počkajte na presmerovanie.',
                        invalidToken: 'Neplatné overovacie údaje',
                        expiredToken: 'Platnosť prihlásenia vypršala. Vyžiadajte si prosím nový prihlasovací odkaz.',
                        genericError: 'Počas overovania prihlasovacích údajov sa vyskytla chyba, skuste to znova.'
                    },
                    login: {
                        success: 'Úspešne ste sa prihlásili',
                        successful: 'Úspešné prihlásenie'
                    },
                    redirect: {
                        message: 'Počkajte na presmerovanie do aplikácie.'
                    },
                    back: {
                        login: 'Späť na prihlásenie'
                    }
                },
                email: {
                    greeting: "Vážená pani doktorka, vážený pán doktor,",
                    thankYou: "ďakujeme za Váš záujem o prístup do",
                    appName: "Nutricia I CASEBOOK",
                    appDescription: "našej odbornej aplikácie určenej pre lekárov a zdravotníckych pracovníkov.",
                    instruction: "Pre dokončenie registrácie a získanie plného prístupu k obsahu prosím kliknite na nasledujúci odkaz:",
                    buttonText: "Dokončiť registráciu do Nutricia I CASEBOOK",
                    linkNote: "(Tento odkaz je jedinečný a platí len pre Vás.)",
                    closing: "Veríme, že v aplikácii nájdete cenné informácie, ktoré Vás obohatia v každodennej praxi.",
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
                        nameLabel: 'Celé meno (vrátane titulu)',
                        namePlaceholder: 'MUDr. Ján Novák, PhD.',
                        specializationLabel: 'Špecializácia',
                        specializationPlaceholder: 'Pediater',
                        workplaceLabel: 'Pracovisko',
                        workplacePlaceholder: 'Univerzitná Nemocnica Bratislava'
                    },
                    caseInfo: {
                        title: 'Krok 1/5: Informácie o pacientovi',
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
                        title: 'Krok 2/5: Informácie o pacientovi',
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
                        nutritionalHistoryLabel: 'Nutričná história',
                        nutritionalHistoryOptions: {
                            mm_no_elimination: 'MM (bez eliminačnej diéty matky)',
                            mm_with_elimination: 'MM (s eliminačnej diéty matky)',
                            standard_formula: 'Štandardná formula',
                            phf: 'Parciálne hydrolyzovaná formula',
                            ehf: 'Extenzívne hydrolyzovaná formula',
                            aaf: 'Aminokyselinovaná formula'
                        },
                        clinicalSymptomsLabel: 'Klinické príznaky',
                        clinicalSymptomsOptions: {
                            eczema: 'Ekzém',
                            atopicDermatitis: 'Atopická dermatitída',
                            urticaria: 'Urtikária',
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
                        title: 'Krok 3/5: Informácie o pacientovi',
                        diagnosisLabel: 'Diagnostika a manažment pacienta',
                        diagnosisPlaceholder: '2x UZ vyšetrenie pre vylúčenie pylorostenózy a invaginácia. Po zavedení Neocate Syneo rýchly ústup ťažkostí do 48 hodín – po 24 hod. dieťa už nevracalo, po 48 hodinách už zmizla aj krv v stolici. Dojča prospieva, z pôrodnej váhy 3.017 g chlapec po 6 mesiacoch dosahuje 6.640 g.'
                    },
                    treatment: {
                        title: 'Krok 4/5: Informácie o pacientovi',
                        usedProductLabel: 'Použitý produkt',
                        usedProductPlaceholder: 'Neocate Syneo',
                        treatmentDescriptionLabel: 'Diskusia a záver',
                        treatmentDescriptionPlaceholder: 'Neocate Syneo mal v prípade chlapca zásadný význam na jeho zdravie a pohodu rodiny. Masívny nález krvi v stolici nielen veľmi stresoval rodičov, ale samozrejme ohrozoval zdravie dieťaťa (napr. anémiou). Aj pomerne časté zvracanie mohlo ohroziť dieťa (neprospievanie, rozvrat minerálového metabolizmu).',
                        attachmentsLabel: 'Prílohy'
                    },
                    summary: {
                        title: 'Krok 5/5: Skontrolujte vyplnené údaje',
                        caseNameLabel: 'Názov kazuistiky',
                        patientAgeLabel: 'Vek dieťaťa v mesiacoch',
                        patientAgeMonths: 'mesiace/ov',
                        genderLabel: 'Pohlavie',
                        affectedSystemsLabel: 'Postihnuté sústavy',
                        familyHistoryLabel: 'Rodinná anamnéza',
                        microbiomeFactorsLabel: 'Faktory ovplyvňujúce mikrobióm',
                        nutritionalHistoryLabel: 'Nutričná história',
                        clinicalSymptomsLabel: 'Klinické symptómy',
                        diagnosisLabel: 'Diagnostika a manžment pacienta',
                        usedProductLabel: 'Použitý produkt',
                        treatmentDescriptionLabel: 'Diskusia a záver'
                    },
                    submission: {
                        title: 'Ďakujeme za vyplnenie kazuistiky.',
                        message: 'Kazuistika bola úspešne odoslaná na schválenie. Po schválení bude publikovaná a dostupná k nahliadnutiu v našej aplikácii.'
                    },
                    validation: {
                        nameRequired: 'Povinný údaj',
                        specializationRequired: 'Povinný údaj',
                        workplaceRequired: 'Povinný údaj',
                        caseNameMin: 'Názov kazuistiky musí mať aspoň 15 znakov',
                        patientAgeRequired: 'Povinný údaj',
                        genderRequired: 'Povinný údaj',
                        affectedSystemsMin: 'Vyberte aspoň jednu sústavu',
                        familyHistoryRequired: 'Povinný údaj',
                        microbiomeFactorsMin: 'Vyberte aspoň jeden faktor ovplyvňujúci mikrobióm',
                        nutritionalHistoryRequired: 'Povinný údaj',
                        clinicalSymptomsMin: 'Vyberte aspoň jeden klinický príznak',
                        problemDescriptionMin: 'Úvod do problematiky musí mať aspoň 200 znakov',
                        diagnosisMin: 'Diagnostika a manažment pacienta musí mať aspoň 200 znakov',
                        usedProductRequired: 'Použitý produkt je povinný',
                        treatmentDescriptionMin: 'Diskusia a záver musí mať aspoň 200 znakov'
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
                        invalid: 'Prosím, zkontrolujte zadaný e-mail'
                    },
                    agreement: {
                        required: 'Pro pokračování je nutné souhlasit s podmínkami používání'
                    },
                    token: {
                        missing: 'Chybějící údaje pro ověření přihlášení',
                        invalid: 'Neplatná autentikace uživatele'
                    }
                },
                form: {
                    email: {
                        label: 'E-mailová adresa'
                    },
                    agreement: {
                        label: 'Souhlasím se',
                        termsLink: 'Všeobecnými podmínkami používání'
                    },
                    submit: {
                        continue: 'Pokračovat'
                    },
                    errors: {
                        sendFailed: 'Nepodařilo se odeslat e-mail. Zkuste to prosím znovu.'
                    }
                },
                page: {
                    title: 'Přihlášení do aplikace',
                    subtitle: "Vážená paní doktorko, vážený pane doktore, do aplikace se přihlásíte zadáním své e-mailové adresy."
                },
                verifyRequest: {
                    title: 'Zkontrolujte svůj email',
                    subtitle: 'Klikněte na unikátní odkaz, který jsme poslali na Váš e-mail.'
                },
                auth: {
                    verification: {
                        loading: 'Ověřujeme přístup...',
                        wait: 'Prosím vyčkejte, ověřujeme Vaše přihlašovací údaje.',
                        failed: 'Chyba ověření',
                        error: 'Chyba při ověřování údajů',
                        successMessage: 'Vaše přihlášení bylo úspěšné, počkejte na přesměrování.',
                        invalidToken: 'Neplatné ověřovací údaje',
                        expiredToken: 'Platnost přihlášení vypršela. Vyžádejte si prosím nový přihlašovací odkaz.',
                        genericError: 'Během ověřování přihlašovacích údajů došlo k chybě, zkuste to znovu.'
                    },
                    login: {
                        success: 'Úspěšně jste se přihlásili',
                        successful: 'Úspěšné přihlášení'
                    },
                    redirect: {
                        message: 'Počkejte na přesměrování do aplikace.'
                    },
                    back: {
                        login: 'Zpět na přihlášení'
                    }
                },
                email: {
                    greeting: "Vážená paní doktorko, vážený pane doktore,",
                    thankYou: "děkujeme za Váš zájem o přístup do",
                    appName: "Nutricia I CASEBOOK",
                    appDescription: "naší odborné aplikace určené pro lékaře a zdravotnické pracovníky.",
                    instruction: "Pro dokončení registrace a získání plného přístupu k obsahu prosím klikněte na následující odkaz:",
                    buttonText: "Dokončit registraci do Nutricia I CASEBOOK",
                    linkNote: "(Tento odkaz je jedinečný a platí pouze pro Vás.)",
                    closing: "Věříme, že v aplikaci naleznete cenné informace, které Vás obohatí ve vaší každodenní praxi.",
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
                        nameLabel: 'Celé jméno (včetně titulu)',
                        namePlaceholder: 'MUDr. Jan Novák, PhD.',
                        specializationLabel: 'Specializace',
                        specializationPlaceholder: 'Pediatr',
                        workplaceLabel: 'Pracoviště',
                        workplacePlaceholder: 'Univerzitní Nemocnice Brno'
                    },
                    caseInfo: {
                        title: 'Krok 1/5: Informace o pacientovi',
                        caseNameLabel: 'Název kazuistiky',
                        caseNamePlaceholder: 'Trávicí potíže dítěte po léčbě matky ATB',
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
                        title: 'Krok 2/5: Informace o pacientovi',
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
                        nutritionalHistoryLabel: 'Nutriční historie',
                        nutritionalHistoryOptions: {
                            mm_no_elimination: 'MM (bez eliminační diety matky)',
                            mm_with_elimination: 'MM (s eliminační dietou matky)',
                            standard_formula: 'Standardní formule',
                            phf: 'Částečně hydrolyzovaná formule',
                            ehf: 'Extenzivně hydrolyzovaná formule',
                            aaf: 'Aminokyselinová formule'
                        },
                        clinicalSymptomsLabel: 'Klinické příznaky',
                        clinicalSymptomsOptions: {
                            eczema: 'Ekzém',
                            atopicDermatitis: 'Atopická dermatitida',
                            urticaria: 'Urtikárie',
                            reflux: 'Reflux',
                            regurgitation: 'Regurgitace',
                            colic: 'Kolika',
                            constipation: 'Zácpa',
                            bloodMucusInStool: 'Krev / Hlen ve stolici',
                            diarrhea: 'Průjem',
                            flatulence: 'Plynatost',
                            dyschezia: 'Dyschézie',
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
                        title: 'Krok 3/5: Informace o pacientovi',
                        diagnosisLabel: 'Diagnostika a manažment pacienta',
                        diagnosisPlaceholder: '2× UZ vyšetření pro vyloučení pylorostenózy a invaginace. Po nasazení Neocate Syneo rychlý ústup potíží do 48 hodin – po 24 hod. dítě již nezvracelo, po 48 hodinách zmizela i krev ve stolici. Kojence prospívá, z porodní váhy 3 017 g chlapec po 6 měsících dosahuje 6 640 g.'
                    },
                    treatment: {
                        title: 'Krok 4/5: Informace o pacientovi',
                        usedProductLabel: 'Použitý produkt',
                        usedProductPlaceholder: 'Neocate Syneo',
                        treatmentDescriptionLabel: 'Diskuze a závěr',
                        treatmentDescriptionPlaceholder: 'Neocate Syneo měl v případě chlapce zásadní význam pro jeho zdraví a pohodu rodiny. Masivní nález krve ve stolici nejen velmi stresoval rodiče, ale samozřejmě ohrožoval zdraví dítěte (např. anémií). Také poměrně časté zvracení mohlo dítě ohrozit (neprospívání, rozvrat minerálového metabolismu).',
                        attachmentsLabel: 'Přílohy'
                    },
                    summary: {
                        title: 'Krok 5/5: Zkontrolujte vyplněné údaje',
                        caseNameLabel: 'Název kazuistiky',
                        patientAgeLabel: 'Věk dítěte v měsících',
                        patientAgeMonths: 'měsíce/ů',
                        genderLabel: 'Pohlaví',
                        affectedSystemsLabel: 'Postižené soustavy',
                        familyHistoryLabel: 'Rodinná anamnéza',
                        microbiomeFactorsLabel: 'Faktory ovlivňující mikrobiom',
                        nutritionalHistoryLabel: 'Nutriční historie',
                        clinicalSymptomsLabel: 'Klinické příznaky',
                        diagnosisLabel: 'Diagnostika a management pacienta',
                        usedProductLabel: 'Použitý produkt',
                        treatmentDescriptionLabel: 'Diskuze a závěr'
                    },
                    submission: {
                        title: 'Děkujeme za vyplnění kazuistiky.',
                        message: 'Kazuistika byla úspěšně odeslána ke schválení. Po schválení bude publikována a dostupná k nahlédnutí v naší aplikaci.'
                    },
                    validation: {
						nameRequired: "Povinný údaj",
						specializationRequired: "Povinný údaj",
						workplaceRequired: "Povinný údaj",
						caseNameMin: "Název kazuistiky musí mít alespoň 15 znaků",
						patientAgeRequired: "Povinný údaj",
						genderRequired: "Povinný údaj",
						affectedSystemsMin: "Vyberte alespoň jednu soustavu",
						familyHistoryRequired: "Povinný údaj",
						microbiomeFactorsMin: "Vyberte alespoň jeden faktor ovlivňující mikrobiom",
						nutritionalHistoryRequired: "Povinný údaj",
						clinicalSymptomsMin: "Vyberte alespoň jeden klinický příznak",
						problemDescriptionMin: "Úvod do problematiky musí mít alespoň 200 znaků",
						diagnosisMin: "Diagnostika a management pacienta musí mít alespoň 200 znaků",
						usedProductRequired: "Použitý produkt je povinný",
						treatmentDescriptionMin: "Diskuze a závěr musí mít alespoň 200 znaků"
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
                    nutritionalHistory: 'Nutriční anamnéza',
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
