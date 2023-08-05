import * as yup from 'yup';

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter username.')
    .email('Please enter valid username.'),

  password: yup
    .string()
    .required('Please enter password.')
    .min(6, 'Password must be at least 6 characters.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)'
    ),
});