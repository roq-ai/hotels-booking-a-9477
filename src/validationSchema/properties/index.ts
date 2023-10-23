import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  price: yup.number().integer().required(),
  availability: yup.boolean().required(),
  company_id: yup.string().nullable().required(),
});
