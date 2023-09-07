import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { DirectionsCar, Delete, Info as InfoIcon } from "@mui/icons-material";
import { Car } from "../models/Car";
import EditIcon from "@mui/icons-material/Edit";
import { StyledIconButton } from "./ListCarItem.css.ts";

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
      <StyledIconButton
        edge="end"
        aria-label="delete"
        onClick={() => onOpenDeleteDialog(car)}
      >
        <Delete sx={{ color: "red" }} />
      </StyledIconButton>
      <StyledIconButton
        edge="end"
        aria-label="details"
        onClick={() => onOpenDetailsDialog(car)}
      >
        <InfoIcon sx={{ color: "blue" }} />
      </StyledIconButton>
      <StyledIconButton
        edge="end"
        aria-label="edit"
        onClick={() => onOpenEditDialog(car)}
      >
        <EditIcon sx={{ color: "green" }} />
      </StyledIconButton>
    </ListItem>
  );
};

export default ListCarItem;
