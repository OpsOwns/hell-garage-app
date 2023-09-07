import ListCar from '../../components/car/list/ListCar';
import Header from '../../components/header/Header';
import { StyledBox } from './index.css';

const CarManagmentPage = () => {
  return (
    <StyledBox>
      <Header title="Zarządzaj autami" />
      <ListCar />
    </StyledBox>
  );
};

export default CarManagmentPage;
