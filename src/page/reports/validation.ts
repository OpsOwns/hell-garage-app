import * as Yup from 'yup';

export const validationSchema = Yup.object({
  description: Yup.string().required('Opis jest wymagany'),
  phone: Yup.string().required('Numer telefonu jest wymagany'),
  carId: Yup.string().required('Auto jest wymagane'),
  date: Yup.string().required('Data zlecenia jest wymagana'),
});
