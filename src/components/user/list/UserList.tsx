import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

export interface User {
  id: number;
  name: string;
  sureName: string;
  email: string;
  phone: string;
  profession: string;
}

interface UserListProps {
  users: User[];
  onRemove: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onRemove }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDialogOpen = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => handleDialogOpen(user)}
                color="primary"
              >
                View
              </IconButton>
              <IconButton onClick={() => onRemove(user.id)} color="secondary">
                Remove
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleDialogClose}>
        {selectedUser && (
          <>
            <DialogTitle>{selectedUser.name}</DialogTitle>
            <DialogContent>
              <p>Email: {selectedUser.email}</p>
              {/* Add more user details here */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default UserList;
