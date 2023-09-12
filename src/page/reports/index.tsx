import { useState } from 'react';
import { TextField, Button, Grid, Autocomplete } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Car } from '../../components/car/models/Car';
import carListData from '../../components/car/mock.data.json';
import { useFormik } from 'formik';
import { StyledBox } from './index.css';
import Header from '../../components/header/Header';
import { validationSchema } from './validation';

const CarReport = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const formik = useFormik({
    initialValues: {
      description: '',
      phone: '',
      carId: '',
      date: dayjs().add(1, 'day').format('YYYY-MM-DD').toString(),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const filterOptions = (options: Car[], state: any) => {
    return options.filter(
      (car) =>
        car.plate.toLowerCase().includes(state.inputValue.toLowerCase()) ||
        state.inputValue.toLowerCase().includes(car.plate.toLowerCase())
    );
  };

  return (
    <StyledBox>
      <Header title="Dodaj zgłoszenie" />
      <form onSubmit={formik.handleSubmit}>
        <Grid container marginTop={2} spacing={3}>
          <Grid item xs={12}>
            <Autocomplete
              onChange={(_event, newValue) => {
                setSelectedCar(newValue);
                formik.setFieldValue('carId', newValue ? newValue.id : '');
              }}
              options={carListData}
              filterOptions={filterOptions}
              value={selectedCar}
              getOptionLabel={(car) => car.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Samochód"
                  variant="outlined"
                  error={formik.touched.carId && Boolean(formik.errors.carId)}
                  helperText={formik.touched.carId && formik.errors.carId}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Numer telefonu"
              rows={4}
              variant="outlined"
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Data naprawy"
                onChange={(date: any) => {
                  const formattedDate = dayjs(date).format('YYYY-MM-DD');
                  formik.setFieldValue('date', formattedDate);
                }}
                value={dayjs(formik.values.date)}
                minDate={dayjs().add(1, 'day')}
                maxDate={dayjs().add(1, 'M')}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Opis"
              multiline
              rows={4}
              variant="outlined"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Utwórz zgłoszenie
            </Button>
          </Grid>
        </Grid>
      </form>
    </StyledBox>
  );
};

export default CarReport;
