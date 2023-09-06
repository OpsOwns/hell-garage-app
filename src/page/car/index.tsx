import ListCar from '../../component/car/list/ListCar';
import Header from '../../component/header/Header';
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
