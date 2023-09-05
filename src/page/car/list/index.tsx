import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  FormControl,
  InputLabel,
  Input,
  Pagination,
} from '@mui/material';
import { DirectionsCar, AddCircle, Delete, Edit } from '@mui/icons-material';

import carListData from './mock.data.json';
import theme from '../../../theme';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
}

const ITEMS_PER_PAGE = 5;

const ListCarPage: React.FC = () => {
  const [carList, setCarList] = useState<Car[]>(carListData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [createDialogOpen, setCreateDialogOpen] = useState<boolean>(false);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState<boolean>(false);
  const [carToDeleteId, setCarToDeleteId] = useState<number | null>(null);
  const [carToEdit, setCarToEdit] = useState<Car | null>(null);
  const [newCar, setNewCar] = useState<Car>({
    id: 0,
    make: '',
    model: '',
    year: 0,
  });
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleOpenDeleteDialog = (carId: number) => {
    setCarToDeleteId(carId);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setCarToDeleteId(null);
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    const updatedCarList = carList.filter((car) => car.id !== carToDeleteId);
    setCarList(updatedCarList);
    handleCloseDeleteDialog();
  };

  const handleOpenCreateDialog = () => {
    setCreateDialogOpen(true);
  };

  const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
    setNewCar({ id: 0, make: '', model: '', year: 0 });
  };

  const handleCreateCar = () => {
    const newCarId = Date.now();
    const newCarObj: Car = {
      id: newCarId,
      make: newCar.make,
      model: newCar.model,
      year: parseInt(newCar.year.toString(), 10),
    };
    setCarList([...carList, newCarObj]);
    handleCloseCreateDialog();
  };

  const handleOpenDetailsDialog = (car: Car) => {
    setSelectedCar(car);
    setDetailsDialogOpen(true);
    setSelectedItem(car.id);
  };

  const handleCloseDetailsDialog = () => {
    setSelectedCar(null);
    setDetailsDialogOpen(false);
  };

  const handleOpenEditDialog = (car: Car) => {
    setCarToEdit(car);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setCarToEdit(null);
    setEditDialogOpen(false);
  };

  const handleSaveEditedCar = () => {
    if (carToEdit) {
      const carIndex = carList.findIndex((car) => car.id === carToEdit.id);

      if (carIndex !== -1) {
        const editedCar = {
          ...carList[carIndex],
          make: newCar.make,
          model: newCar.model,
          year: parseInt(newCar.year.toString(), 10),
        };

        const updatedCarList = [...carList];
        updatedCarList[carIndex] = editedCar;
        setCarList(updatedCarList);
      }
    }

    handleCloseEditDialog();
  };

  const totalPages = Math.ceil(carList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const filteredCarList = carList.filter((car) =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCarList = filteredCarList.slice(startIndex, endIndex);

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={handleOpenCreateDialog}
        style={{ marginTop: '16px' }}
      >
        Create New Car
      </Button>
      <TextField
        label="Search Cars"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '16px' }}
      />
      <List>
        {displayedCarList.map((car) => (
          <ListItem
            key={car.id}
            sx={{
              cursor: 'pointer',
              backgroundColor:
                selectedItem === car.id
                  ? theme.palette.primary.main
                  : 'transparent',
            }}
            onClick={() => handleOpenDetailsDialog(car)}
          >
            <ListItemIcon>
              <DirectionsCar />
            </ListItemIcon>
            <ListItemText
              primary={`${car.make} ${car.model}`}
              secondary={`Year: ${car.year}`}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleOpenDeleteDialog(car.id)}
            >
              <Delete />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => handleOpenEditDialog(car)}
            >
              <Edit />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <div style={{ display: 'static', justifyContent: 'center' }}>
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
          />
        )}
      </div>

      <Dialog
        open={createDialogOpen}
        onClose={handleCloseCreateDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Create New Car</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="make">Make</InputLabel>
            <Input
              id="make"
              type="text"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="model">Model</InputLabel>
            <Input
              id="model"
              type="text"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="year">Year</InputLabel>
            <Input
              id="year"
              type="number"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateCar} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={editDialogOpen}
        onClose={handleCloseEditDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Edit Car Details</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="edit-make">Make</InputLabel>
            <Input
              id="edit-make"
              type="text"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="edit-model">Model</InputLabel>
            <Input
              id="edit-model"
              type="text"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="edit-year">Year</InputLabel>
            <Input
              id="edit-year"
              type="number"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSaveEditedCar}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={detailsDialogOpen}
        onClose={handleCloseDetailsDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Car Details</DialogTitle>
        <DialogContent>
          {selectedCar && (
            <>
              <Typography variant="h6">
                {selectedCar.make} {selectedCar.model}
              </Typography>
              <Typography>Year: {selectedCar.year}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetailsDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this car?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="primary"
            variant="contained"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ListCarPage;
