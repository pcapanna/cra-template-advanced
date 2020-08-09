import React, {useEffect, useState} from "react";
import {FormControl, Input, InputLabel, TextField, TextFieldProps} from "@material-ui/core";
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';


interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const HoursMinutesMaskedInput = (props: TextMaskCustomProps) => {
  const {inputRef, ...other} = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-9]/, /[0-9]/, ' HOURS', ' ', /[0-9]/, /[0-9]/, ' MINUTES',]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
};

const MinutesField = ({onChange, value, ...rest}: { onChange: (newValue: number) => any, value? } & TextFieldProps) => {

  const [textValue, setTextValue] = useState<string>("0100");
  useEffect(() => {

  }, [value]);

  const onFieldChange = (stringValue) => {
    setTextValue(stringValue);
    try {
      const hoursValue = stringValue.slice(0, 2);
      const minutesValue = stringValue.slice(2, 5);
      const totalMinutesValue = parseInt(hoursValue) * 60 + parseInt(minutesValue);
      onChange(totalMinutesValue);
    } catch (e) {
      onChange(undefined);
    }
  };

  return (
    <>
      <TextField
        {...rest}
        fullWidth={false}
        onChange={onFieldChange}
        // value={textValue}
      />
      <TextField
        {...rest}
        fullWidth={false}
        onChange={onFieldChange}
        // value={textValue}
      />
    </>)

  // return (
  //   <FormControl>
  //     <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
  //     <Input
  //       value={""}
  //       onChange={onFieldChange}
  //       name="textmask"
  //       id="formatted-text-mask-input"
  //       inputComponent={HoursMinutesMaskedInput as any}
  //     />
  //   </FormControl>
  // )
};

export default MinutesField;
