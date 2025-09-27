import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      validation: {
        email: {
          required: 'Email is required',
          invalid: 'Please enter a valid email address'
        },
        agreement: {
          required: 'You must agree to the Terms of Service'
        }
      },
      form: {
        email: {
          label: 'Email Address'
        },
        agreement: {
          label: 'I agree to the',
          termsLink: 'Terms of Service'
        },
        submit: {
          continue: 'Continue'
        }
      },
      page: {
        title: 'Sign in to your account',
        subtitle: "Enter your email address and we'll send you a secure login link."
      },
      verifyRequest: {
        title: 'Check your email',
        subtitle: 'A sign in link has been sent to your email address. Please check your inbox and click the link to continue.'
      }
    }
  },
  sk: {
    translation: {
      validation: {
        email: {
          required: 'Email je povinný',
          invalid: 'Prosím zadajte platný email'
        },
        agreement: {
          required: 'Musíte súhlasiť s podmienkami používania'
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
        }
      },
      page: {
        title: 'Prihláste sa do svojho účtu',
        subtitle: "Zadajte svoju emailovú adresu a pošleme vám bezpečný prihlasovací odkaz."
      },
      verifyRequest: {
        title: 'Skontrolujte svoj email',
        subtitle: 'Prihlasovací odkaz bol odoslaný na vašu emailovú adresu. Prosím skontrolujte svoju schránku a kliknite na odkaz pre pokračovanie.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
