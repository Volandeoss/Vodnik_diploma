import * as yup from 'yup';

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const nameShape = {
  first_name: yup
    .string()
    .required('Ім’я є обов’язковим')
    .min(2, 'Ім’я має містити щонайменше 2 символи')
    .max(30, 'Ім’я не може бути довшим за 30 символи')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄ]+([ '-][a-zA-Zа-яА-ЯіІїЇєЄ]+)*$/,
      'Ім’я може містити тільки літери, пробіли, дефіси та апострофи'
    ),
};
export const RegPasswordShape = {
  password: yup
    .string()
    .required('Пароль є обов’язковим')
    .min(8, 'Пароль має містити щонайменше 8 символів')
    .matches(/[A-Z]/, 'Пароль повинен містити хоча б одну велику літеру')
    .matches(/[a-z]/, 'Пароль повинен містити хоча б одну малу літеру')
    .matches(/[0-9]/, 'Пароль повинен містити хоча б одну цифру'),
  confirmPassword: yup
    .string()
    .required('Підтвердження пароля є обов’язковим')
    .oneOf([yup.ref('password')], 'Паролі повинні співпадати'),
};
export const passwordShape = {
  password: yup
    .string()
    .required('Пароль є обов’язковим')
    .min(8, 'Пароль має містити щонайменше 8 символів')
    .matches(/[A-Z]/, 'Пароль повинен містити хоча б одну велику літеру')
    .matches(/[a-z]/, 'Пароль повинен містити хоча б одну малу літеру')
    .matches(/[0-9]/, 'Пароль повинен містити хоча б одну цифру'),
};

export const phoneShape = {
  phone: yup
    .string()
    .required('Номер телефону є обов’язковим')
    .test('valid-ukraine-phone', 'Номер не може починатися з 3800', value => {
      return value ? !/^3800/.test(value) : true;
    })
    .min(12, 'Номер телефону занадто короткий')
    .matches(
      /^380\d{9}$/,
      'Номер телефону повинен починатися з 380 і містити 12 цифр'
    ),
};

export const emailShape = {
  email: yup
    .string()
    .required('Email є обов’язковим')
    .matches(emailRegex, 'Некоректний формат email-адреси'),
};

export const termsShape = {
  terms: yup
    .boolean()
    .oneOf([true], 'Ви повинні погодитись з умовами використання')
    .required('Потрібно погодитись з умовами використання'),
};
