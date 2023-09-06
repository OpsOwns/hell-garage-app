import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import { DirectionsCar, Delete, Info as InfoIcon } from '@mui/icons-material';
import { Car } from '../models/Car';
import EditIcon from '@mui/icons-material/Edit';
interface CarListItemProps {
  car: Car;
  onOpenDeleteDialog: (car: Car) => void;
  onOpenDetailsDialog: (car: Car) => void;
  onOpenEditDialog: (car: Car) => void;
}

const ListCarItem: React.FC<CarListItemProps> = ({
  car,
  onOpenDeleteDialog,
  onOpenDetailsDialog,
  onOpenEditDialog,
}) => {
  return (
    <ListItem key={car.id}>
      <ListItemIcon>
        <DirectionsCar />
      </ListItemIcon>
      <ListItemText
        primary={`${car.name} ${car.model}`}
        secondary={`Tablica: ${car.plate}`}
      />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => onOpenDeleteDialog(car)}
      >
        <Delete sx={{ color: 'red' }} />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="details"
        onClick={() => onOpenDetailsDialog(car)}
      >
        <InfoIcon sx={{ color: 'blue' }} />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="edit"
        onClick={() => onOpenEditDialog(car)}
      >
        <EditIcon sx={{ color: 'green' }} />
      </IconButton>
    </ListItem>
  );
};

export default ListCarItem;
