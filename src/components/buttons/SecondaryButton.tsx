import React, {FC} from "react";
import {Box, Button, ButtonProps, CircularProgress} from "@mui/material";

interface SecondaryButtonProps extends ButtonProps {
    loading?: boolean;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({loading, children, ...props}) => {
    return (
        <Button
            {...props}
            variant="outlined"
            startIcon={<Box
                component="img"
                src="/assets/icons/filter.svg"
                alt=""
                sx={{
                    width: 24,
                    height: 24,
                    color: 'transparent',
                    filter: 'brightness(0) invert(1)'
                }}
            />}
            sx={{
                backgroundColor: 'transparent',
                color: "#FFF",
                borderColor: '#FFFFFF4D',
                borderRadius: 28,
                fontWeight: "bold",
                width: 220,
                height: 56,
                mt: 3,
                pointerEvents: props.disabled || loading ? "none" : "auto",
                "&.Mui-disabled": {
                    opacity: 0.9,
                    color: "#62646eff",
                },
                "&:hover": {
                    backgroundColor: "rgba(228,228,228,0.16)",
                },
                ...props.sx,
            }}
            disabled={props.disabled || loading}
        >

            {loading ? (
                <CircularProgress size={24} aria-label="loading"/>
            ) : (
                children
            )}
        </Button>
    );
};

export default SecondaryButton;
