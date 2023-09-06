import React, { useEffect, useState } from 'react';
import { Container, List, Button, Pagination } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import carListData from '../mock.data.json';
import { Car } from '../models/Car';
import ListCarItem from './ListCarItem';
import SearchCar from '../search/SearchCar';
import DetailsCarDialog from '../dialog/Details';
import RemoveCarDialog from '../dialog/Remove';
import CreateCarDialog from '../dialog/Create';

const ITEMS_PER_PAGE = 5;

const ListCar = () => {
  const [carList, setCarList] = useState<Car[]>(carListData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [createDialogOpen, setCreateDialogOpen] = useState<boolean>(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState<boolean>(false);
  const [carToDeleteId, setCarToDeleteId] = useState<number | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    // When the search term changes, reset the current page to 1.
    setCurrentPage(1);
  }, [searchTerm]);

  const handleOpenDeleteDialog = (car: Car) => {
    setSelectedCar(car);
    setCarToDeleteId(car?.id!);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setCarToDeleteId(null);
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = async () => {
    const updatedCarList = carList.filter((car) => car.id !== carToDeleteId);
    setCarList(updatedCarList);
    handleCloseDeleteDialog();
  };

  const handleOpenCreateDialog = () => {
    setCreateDialogOpen(true);
  };

  const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
  };

  const handleCreateCar = async (car: Car) => {
    setCarList([...carList, car]);
    handleCloseCreateDialog();
  };

  const handleOpenDetailsDialog = (car: Car) => {
    setSelectedCar(car);
    setDetailsDialogOpen(true);
  };

  const handleCloseDetailsDialog = () => {
    setSelectedCar(null);
    setDetailsDialogOpen(false);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const filteredCarList = carList.filter(
    (car) =>
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.plate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCarList.length / ITEMS_PER_PAGE);

  const displayedCarList = filteredCarList.slice(startIndex, endIndex);

  const shouldHidePagination = totalPages <= 1;

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={handleOpenCreateDialog}
        style={{ marginTop: '16px', marginBottom: '10px' }}
      >
        Dodaj nowe auto
      </Button>

      <SearchCar searchTerm={searchTerm} handleSearch={handleSearch} />

      <List>
        {displayedCarList.map((car) => (
          <ListCarItem
            key={car.id}
            car={car}
            onOpenDeleteDialog={handleOpenDeleteDialog}
            onOpenDetailsDialog={handleOpenDetailsDialog}
            onOpenEditDialog={handleCloseCreateDialog}
          />
        ))}
      </List>

      <div style={{ display: 'static', justifyContent: 'center' }}>
        {!shouldHidePagination && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
          />
        )}
      </div>

      <CreateCarDialog
        handleCreateCar={handleCreateCar}
        createDialogOpen={createDialogOpen}
        handleCloseCreateDialog={handleCloseCreateDialog}
      />

      <DetailsCarDialog
        detailsDialogOpen={detailsDialogOpen}
        handleCloseCreateDialog={handleCloseDetailsDialog}
        selectedCar={selectedCar ?? undefined}
      />

      <RemoveCarDialog
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        handleConfirmDelete={handleConfirmDelete}
        deleteDialogOpen={deleteDialogOpen}
        selectedCar={selectedCar || undefined}
      />
    </Container>
  );
};

export default ListCar;
