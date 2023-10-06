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
import { Car } from '../models/Car';
import { StyledFormControl } from './dialog.css';
import theme from '../../../theme';
import YearPicker from '../year/YearPicker';
import FuelTypeDropdown from '../fuel/FuelTypeDropdown';

interface CreateCarDialogProps {
  createDialogOpen: boolean;
  handleCloseCreateDialog: () => void;
  handleCreateCar: (car: Car) => Promise<void>;
}

const licensePlateValidation = (value: string) => {
  const regex = /^[A-Z]{2}-\d{3}[A-Z]{2}$/;

  if (!regex.test(value)) {
    return false;
  }

  return true;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Nazwa jest wymagane'),
  model: Yup.string().required('Model jest wymagany'),
  year: Yup.number().required('Rocznik jest wymagany').positive().integer(),
  engine: Yup.string().required('Silnik jest wymagany'),
  plate: Yup.string()
    .required('Tablice rejestracyjne są wymagane')
    .test('license-plate', 'Invalid license plate', licensePlateValidation),
  fuelType: Yup.string().required('Wybierz typ paliwa'),
});

const CreateCarDialog = ({
  createDialogOpen,
  handleCloseCreateDialog,
  handleCreateCar,
}: CreateCarDialogProps) => {
  const formik = useFormik({
    initialValues: {
      id: 0,
      year: new Date().getFullYear(),
      name: '',
      engine: '',
      model: '',
      plate: '',
      fuelType: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (car: Car) => {
      await handleCreateCar(car);
      formik.resetForm();
    },
  });

  return (
    <Dialog
      open={createDialogOpen}
      onClose={handleCloseCreateDialog}
      fullWidth
      maxWidth="xs"
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Dodaj nowe auto</DialogTitle>
        <DialogContent>
          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="name">Nazwa</InputLabel>
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
            <InputLabel htmlFor="model">Model</InputLabel>
            <Input
              id="model"
              type="text"
              name="model"
              value={formik.values.model}
              onChange={formik.handleChange}
              error={formik.touched.model && Boolean(formik.errors.model)}
            />
            <FormHelperText error>
              {formik.touched.model && formik.errors.model}
            </FormHelperText>
          </StyledFormControl>

          <StyledFormControl theme={theme} fullWidth>
            <YearPicker
              value={formik.values.year}
              onChange={(date: number) => {
                formik.setFieldValue('year', date);
              }}
            />
          </StyledFormControl>
          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="engine">Silnik</InputLabel>
            <Input
              id="engine"
              type="text"
              name="engine"
              value={formik.values.engine}
              onChange={formik.handleChange}
              error={formik.touched.engine && Boolean(formik.errors.engine)}
            />
            <FormHelperText error>
              {formik.touched.engine && formik.errors.engine}
            </FormHelperText>
          </StyledFormControl>
          <StyledFormControl theme={theme} fullWidth>
            <InputLabel htmlFor="plate">Tablica Rejestracyjna</InputLabel>
            <Input
              id="plate"
              type="text"
              name="plate"
              value={formik.values.plate}
              onChange={formik.handleChange}
              error={formik.touched.plate && Boolean(formik.errors.plate)}
            />
            <FormHelperText error>
              {formik.touched.plate && formik.errors.plate}
            </FormHelperText>
          </StyledFormControl>
          <StyledFormControl theme={theme} fullWidth>
            <FuelTypeDropdown
              value={formik.values.fuelType}
              onChange={formik.handleChange}
              error={formik.touched.fuelType && Boolean(formik.errors.fuelType)}
            />
            <FormHelperText error>
              {formik.touched.fuelType && formik.errors.fuelType}
            </FormHelperText>
          </StyledFormControl>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => {
              formik.resetForm();
              handleCloseCreateDialog();
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
            Dodaj
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateCarDialog;
