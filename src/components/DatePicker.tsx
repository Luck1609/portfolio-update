import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Controller, useFormContext } from "react-hook-form";
import dayjs from 'dayjs';


type DatePickerTypes = {
  name: string,
  label: string,
}

const DatePickers = ({
  name,
  label,
}: DatePickerTypes) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="">
          <label className="font-medium text-sm mb-1.5 text-slate-400">{label}</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={onChange} value={dayjs(value)} className="w-full text-sm custom" format="MM/YY" />
          </LocalizationProvider>
        </div>
      )}
    />
  );
}

export default DatePickers;
