import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

interface SpinnerProps extends Record<string, any> {
    color?: string
}

const Spinner = ({color, ...rest}: SpinnerProps) => {
    const customStyle = color ? {color} : undefined;
    return (
        <CircularProgress
            {...rest}
            style={customStyle}
            color="secondary"
        />
    );
};

export default Spinner;
