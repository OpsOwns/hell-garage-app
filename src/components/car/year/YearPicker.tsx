import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface YearPickerProps {
  value: number;
  onChange: (value: number) => void;
}

const YearPicker = ({ value, onChange }: YearPickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Rok produkcji"
        value={dayjs(new Date(value, 0, 1))}
        onChange={(date: any) => {
          onChange(date.$y);
        }}
        views={['year']}
        maxDate={dayjs(Date.now())}
      />
    </LocalizationProvider>
  );
};

export default YearPicker;
