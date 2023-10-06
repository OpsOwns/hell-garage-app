import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import theme from '../../../theme';
import { User } from '../list/UserList';
import { StyledFormControl } from '../../car/dialog/dialog.css';
import ProfessionDropDown from '../profession/ProfessionDropDown';

interface CreateUserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: User) => Promise<void>;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Imię jest wymagane'),
  sureName: Yup.string().required('Nazwisko jest wymagane'),
  email: Yup.string()
    .email('nie prawidłowy format adresu email')
    .required('Email jest wymagany'),
  phone: Yup.string().required('Telefon jest wymagany'),
  profession: Yup.string().required('Wybierz zawód pracownika'),
});

const CreateUserDialog = ({
  isOpen,
  onClose,
  onSubmit,
}: CreateUserDialogProps) => {
  const formik = useFormik({
    initialValues: {
      id: 0,
      name: '',
      sureName: '',
      email: '',
      phone: '',
      profession: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (user: User) => {
      await onSubmit(user);
      formik.resetForm();
    },
  });

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Nowy pracownik</DialogTitle>
        <DialogContent>
          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="name">Imię</InputLabel>
            <Input
              id="name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
            <FormHelperText error>
              {formik.touched.name && formik.errors.name}
            </FormHelperText>
          </StyledFormControl>
          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="sureName">Nazwisko</InputLabel>
            <Input
              id="sureName"
              type="text"
              name="sureName"
              value={formik.values.sureName}
              onChange={formik.handleChange}
              error={formik.touched.sureName && Boolean(formik.errors.sureName)}
            />
            <FormHelperText error>
              {formik.touched.sureName && formik.errors.sureName}
            </FormHelperText>
          </StyledFormControl>
          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <FormHelperText error>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </StyledFormControl>

          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="phone">Telefon</InputLabel>
            <Input
              id="phone"
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
            />
            <FormHelperText error>
              {formik.touched.phone && formik.errors.phone}
            </FormHelperText>
          </StyledFormControl>

          <StyledFormControl theme={theme} fullWidth>
            <ProfessionDropDown
              value={formik.values.profession}
              onChange={formik.handleChange}
              error={
                formik.touched.profession && Boolean(formik.errors.profession)
              }
            />
            <FormHelperText error>
              {formik.touched.profession && formik.errors.profession}
            </FormHelperText>
          </StyledFormControl>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => {
              formik.resetForm();
              onClose();
            }}
          >
            Anuluj
          </Button>

          <Button
            type="button"
            color="primary"
            variant="contained"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Utwórz
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateUserDialog;
