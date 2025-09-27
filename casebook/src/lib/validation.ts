import { object, string, boolean, refine } from "superstruct";
import { TFunction } from 'i18next';
import isEmail from 'validator/lib/isEmail';

export const createLoginSchema = (t: TFunction) => {
  const Email = refine(string(), 'email', (value) => {
    if (!value) return t('validation.email.required');
    return isEmail(value) || t('validation.email.invalid');
  });

  const Agreement = refine(boolean(), 'agreement', (value) => {
    return Boolean(value) || t('validation.agreement.required');
  });

  return object({
    email: Email,
    agree: Agreement
  });
};

export type LoginFormData = {
  email: string;
  agree: boolean;
};
