import { useState } from 'react';
import {
  Card,
  CardContent,
  Checkbox,
  Grid,
  Typography,
  FormControlLabel,
  ListItemText,
} from '@mui/material';
import data from './tasks.data.json';
import './home.css';
import { StyledBox } from './index.css';
import Header from '../../components/header/Header';
import dayjs from 'dayjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  clientNumber: string;
  carName: string;
  done: boolean;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>(data);

  const handleTaskToggle = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const tasksToShow = tasks.filter((task) => !task.done);

  return (
    <StyledBox>
      <Header title={`Zgłoszenia na dzień ${dayjs().format('DD.MM.YYYY')}`} />

      <Grid container spacing={2} marginTop={2} className="task-list-container">
        {tasksToShow.map((task) => (
          <Card key={task.id} variant="outlined" className="task-card">
            <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
              <ListItemText>
                <Typography
                  variant="body1"
                  style={{
                    textDecoration: task.done ? 'line-through' : 'none',
                  }}
                >
                  <b>{task.title}</b>
                </Typography>
                <Typography variant="body2">{task.description}</Typography>
              </ListItemText>
              <div style={{ marginTop: 'auto', marginLeft: 'auto' }}>
                <FormControlLabel
                  sx={{ pointerEvents: 'none' }}
                  control={
                    <Checkbox
                      sx={{ pointerEvents: 'auto' }}
                      checked={task.done}
                      onChange={() => handleTaskToggle(task.id)}
                      color="primary"
                    />
                  }
                  label="Zakończ"
                  labelPlacement="start"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default HomePage;
