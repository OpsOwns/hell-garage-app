import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import { Car } from '../models/Car';

interface CarDetailsDialogProps {
  detailsDialogOpen: boolean;
  handleCloseCreateDialog: () => void;
  selectedCar: Car;
}

const DetailsCarDialog = ({
  detailsDialogOpen,
  handleCloseCreateDialog,
  selectedCar,
}: CarDetailsDialogProps) => {
  return (
    <Dialog
      open={detailsDialogOpen}
      onClose={handleCloseCreateDialog}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle> {selectedCar ? selectedCar.name : ''} </DialogTitle>
      <DialogContent>
        {selectedCar && (
          <>
            <Typography variant="h6">
              Model: {selectedCar.model} Tablica: {selectedCar.plate}
            </Typography>
            <Typography>Rok produkcji: {selectedCar.year}</Typography>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseCreateDialog} color="primary">
          Zamknij
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsCarDialog;
