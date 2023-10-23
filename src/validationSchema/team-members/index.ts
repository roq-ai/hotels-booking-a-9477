import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  position: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
