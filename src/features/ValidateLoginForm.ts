import { ValidationErrors } from "@/shared/const/constants";

export interface LoginFormState {
  email?: string;
  password?: string;
}

export const validateLoginForm = (formData: LoginFormState): LoginFormState => {
  const newErrors: LoginFormState = {};

  // Валидация email
  if (!formData.email) {
    newErrors.email = ValidationErrors.FILL_IN_EMAIL;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    newErrors.email = ValidationErrors.INVALID_EMAIL_FORMAT;
  }

  // Валидация пароля
  if (!formData.password) {
    newErrors.password = ValidationErrors.FILL_IN_PASSWORD;
  } else if (formData.password.length < 6) {
    newErrors.password = ValidationErrors.SIX_CHARACTERS_IN_PASSWORD;
  } else if (!/[A-Z]/.test(formData.password)) {
    newErrors.password = ValidationErrors.CAPITAL_LETTER_IN_PASSWORD;
  } else if (!/[0-9]/.test(formData.password)) {
    newErrors.password = ValidationErrors.NUMBER_IN_PASSWORD;
  }

  return newErrors;
};
