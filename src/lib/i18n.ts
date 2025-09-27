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
        },
        token: {
          missing: 'Missing verification token',
          invalid: 'Invalid or expired token'
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
      },
      auth: {
        verification: {
          loading: 'Verifying your access...',
          wait: 'Please wait while we verify your token.',
          failed: 'Verification failed',
          error: 'Error verifying token'
        },
        login: {
          success: 'Successfully logged in',
          successful: 'Successful login'
        },
        redirect: {
          message: 'Redirecting you to the main page...'
        },
        back: {
          login: 'Back to login'
        }
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
          error: 'Chyba pri overovaní tokenu'
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
