import React from 'react';
import {KeyboardDatePicker} from "@material-ui/pickers"
import i18next from "i18next";
import {useTranslation} from "react-i18next";

i18next.addResources('es', 'DatePicker', {
  'Invalid Date': 'Formato de fecha inválido',
  'Today': 'Hoy',
  'Cancel': 'Cancelar',
  'OK': 'OK',
});

i18next.addResources('es', 'DatePicker', {
  'Invalid Date': 'Invalid Date',
  'Today': 'Today',
  'Cancel': 'Cancel',
  'OK': 'OK',
});


const DatePicker = (
  {
    value,
    dateFormat = 'dd/MM/yyyy',
    onChange,
    ...rest
  }: {
    value?;
    onChange?;
    dateFormat?: string;
  } & Record<string, any>) => {

  const {t} = useTranslation();

  value = value ? value : null;

  // const today = moment(new Date()).format(dateFormat.toUpperCase());

  return (
    <KeyboardDatePicker
      {...rest}
      variant={"inline"}
      format={dateFormat}
      value={value}
      onChange={onChange}
      // disableOpenOnEnter
      // animateYearScrolling={false}
      // invalidDateMessage={t('Invalid Date', {plainText: true})}
      // clearable // AVAILABLE ON DIALOG FORMAT
      // cancelLabel={t('Cancel', {plainText: true})}  // AVAILABLE ON DIALOG FORMAT
      // todayLabel={t('Today', {plainText: true})}  // AVAILABLE ON DIALOG FORMAT
      // okLabel={t('OK', {plainText: true})}  // AVAILABLE ON DIALOG FORMAT
      autoOk
    />
  );
};

export default DatePicker;
