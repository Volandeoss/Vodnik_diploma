import * as yup from 'yup';
import {
  nameShape,
  RegPasswordShape,
  phoneShape,
  emailShape,
  termsShape,
  passwordShape,
} from '@constants/shapes';

export const RegisterSchema = () => {
  return yup.object().shape({
    ...nameShape,
    ...RegPasswordShape,
    ...phoneShape,
    ...emailShape,
    ...termsShape,
  });
};
export const LoginSchema = () => {
  return yup.object().shape({
    ...emailShape,
    ...passwordShape,
  });
};
