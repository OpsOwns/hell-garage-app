import { useState } from 'react';
import { StyledBox } from '../home/index.css';
import Header from '../../components/header/Header';
import UserList, { User } from '../../components/user/list/UserList';
import UserForm from '../../components/user/create/CreateUser';
import { Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddUser = async (user: User) => {
    setUsers([...users, user]);
  };

  const handleRemoveUser = (userId: Number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleOpenCreateDialog = () => {
    setIsFormOpen(true);
  };

  return (
    <StyledBox>
      <Header title="Zarządzaj pracownikami" />
      <UserList users={users} onRemove={handleRemoveUser} />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircle />}
        onClick={handleOpenCreateDialog}
        style={{ marginTop: '16px', marginBottom: '10px' }}
      >
        Dodaj nowego pracownika
      </Button>
      <UserForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddUser}
      />
    </StyledBox>
  );
};

export default Users;
