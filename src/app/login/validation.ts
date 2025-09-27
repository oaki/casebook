import { z } from "zod";
import { TFunction } from 'i18next';

export const createLoginSchema = (t: TFunction) => {
  return z.object({
    email: z.string()
      .min(1, t('validation.email.required'))
      .email(t('validation.email.invalid')),
    agree: z.boolean()
      .refine(val => val === true, {
        message: t('validation.agreement.required')
      })
  });
};

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;
