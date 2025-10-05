import { z } from 'zod';
import {TFunction} from "i18next";

export const createLoginSchema = (t: TFunction) => {
  return z.object({
    email: z.string({
        required_error: t('validation.email.required'),
    })
      .min(1, t('validation.email.required'))
      .email(t('validation.email.invalid')),
    agree: z.boolean({
            required_error: t('validation.agreement.required'),
        })
      .refine(val => val === true, {
        message: t('validation.agreement.required')
      })
  });
};

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;
