import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { Car } from '../models/Car';

interface DeleteConfirmationDialogProps {
  deleteDialogOpen: boolean;
  handleCloseDeleteDialog: () => void;
  handleConfirmDelete: () => void;
  selectedCar: Car | undefined;
}

const RemoveCarDialog = ({
  deleteDialogOpen,
  handleCloseDeleteDialog,
  handleConfirmDelete,
  selectedCar,
}: DeleteConfirmationDialogProps) => {
  return (
    <Dialog
      open={deleteDialogOpen}
      onClose={handleCloseDeleteDialog}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>Potwierdzenie kasowania</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Jestes pewny ze chcesz skasowac{' '}
          {selectedCar ? selectedCar.name : 'to auto'}
          {' ?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDeleteDialog} color="primary">
          Anuluj
        </Button>
        <Button
          onClick={handleConfirmDelete}
          color="primary"
          variant="contained"
        >
          Potwierdz
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemoveCarDialog;
