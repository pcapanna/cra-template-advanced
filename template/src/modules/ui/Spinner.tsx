import React, {CSSProperties} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface SpinnerProps extends Record<string, any> {
  color?: 'primary' | 'secondary' | 'inherit';
  size?: number;
  containerStyle?: CSSProperties;
}

const Spinner = (
  {
    color, size = 40, thickness = 4, containerStyle = {}, ...rest
  }: SpinnerProps) => {

  containerStyle = {
    textAlign: "center",
    width: "100%",
    marginTop: 60,
    ...containerStyle
  };

  return (
    <div style={containerStyle}>
      <CircularProgress color={color} size={size} thickness={4} {...rest}/>
    </div>
  );
};

export default Spinner;
