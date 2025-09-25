import React from "react";
import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ loading, children, ...props }) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        backgroundColor: props.disabled || loading ? "#FF0000" : "#FFFFFF",
        color: "#2B3C90",
        borderRadius: 28,
        fontWeight: "bold",
        width: 220,
        height: 56,
        mt: 3,
        pointerEvents: props.disabled || loading ? "none" : "auto",
        "&.Mui-disabled": {
          opacity: 1,
          backgroundColor: "#d0d0d0ff",
          color: "#62646eff",
        },
        "&:hover": {
          backgroundColor: props.disabled || loading ? "#FF0000" : "#e6e6e6",
        },
        ...props.sx,
      }}
      disabled={props.disabled || loading}
    >

{loading ? (
  <CircularProgress size={24} aria-label="loading" />
) : (
  children
)}
    </Button>
  );
};

export default PrimaryButton;
