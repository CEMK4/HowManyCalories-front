import * as yup from 'yup'

export const requiredField = 'Это обязательное поле!'
export const numberField = 'Введите, пожалуйста, число!'

export const productSchema = yup.object({
  title: yup.string().required(requiredField),
  calories: yup.number().required(requiredField).typeError(numberField),
  carbs: yup.number().required(requiredField).typeError(numberField),
  fats: yup.number().required(requiredField).typeError(numberField),
  proteins: yup.number().required(requiredField).typeError(numberField)
})
