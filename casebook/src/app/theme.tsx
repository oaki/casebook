import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        h1: { fontSize: "4rem" },
        h2: { fontSize: "2.5rem" },
    },
    palette: {
        // Defining a theme mode is helpful for component defaults
        mode: 'dark',
        primary: {
            main: "#8A7EFF", // A vibrant purple/blue for primary actions
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#ffffff",
            contrastText: "#000000",
        },
        // Add a background color to the palette
        background: {
            default: '#09123B'
        }
    },
    components: {
        // This ensures your app's background is set correctly
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#09123B',
                },
            },
        },
        // NEW: Configuration for the Checkbox
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    // Style for the UNCHECKED box
                    color: 'rgba(255, 255, 255, 0.7)', // A semi-transparent white outline

                    // Hover state for UNCHECKED box
                    '&:hover': {
                        backgroundColor: 'rgba(138, 126, 255, 0.1)', // Subtle background glow on hover
                    },

                    // Styles for the CHECKED state
                    '&.Mui-checked': {
                        color: '#8A7EFF', // A bright, vibrant color for the checked box

                        // Hover state for CHECKED box
                        '&:hover': {
                            backgroundColor: 'rgba(138, 126, 255, 0.2)', // A brighter glow on hover
                        },
                    },

                    // Styles for the DISABLED state
                    '&.Mui-disabled': {
                        color: 'rgba(255, 255, 255, 0.3)', // Faded color for disabled state
                    },
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "white",
                    textDecoration: "underline",
                    "&:hover": { color: "#d1d1d1" },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: { textTransform: "none" },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: { color: "white" },
            },
        },
        MuiTextField: {
            // ... your existing MuiTextField styles
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    "& .MuiFilledInput-root": {
                        borderRadius: 8,
                        // Fix error border to respect border radius
                        "&.Mui-error::before": {
                            borderBottom: "none", // Remove the default error border
                        },
                        "&.Mui-error": {
                            border: "1px solid #f44336", // Add a proper border for error state
                            borderRadius: 8, // Ensure border radius is maintained
                        },
                    },
                    "& .MuiInputLabel-root": {
                        fontWeight: 500,
                    },
                },
            },
            variants: [
                {
                    props: { variant: "filled", color: "primary" },
                    style: {
                        "& .MuiFilledInput-root": {
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            "&:hover": { backgroundColor: "#f0f0f0" }, // slight change on hover
                            "&.Mui-focused": { backgroundColor: "#ffffff" },
                            // Error state for primary variant
                            "&.Mui-error": {
                                backgroundColor: "#ffffff",
                                border: "1px solid #f44336",
                                "&::before": {
                                    display: "none", // Hide the default error line
                                },
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: "#000000",
                            "&.Mui-focused": { color: "#000000" },
                            "&.MuiFormLabel-filled": { color: "#000000" },
                        },
                    },
                },
                {
                    props: { variant: "filled", color: "secondary" },
                    style: {
                        "& .MuiFilledInput-root": {
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            "&:hover": { backgroundColor: "#f0f0f0" },
                            "&.Mui-focused": { backgroundColor: "#ffffff" },
                            // Error state for secondary variant
                            "&.Mui-error": {
                                backgroundColor: "#ffffff",
                                border: "1px solid #f44336",
                                "&::before": {
                                    display: "none", // Hide the default error line
                                },
                            },
                        },
                        "& .MuiInputLabel-root": {
                            color: "#000000",
                            "&.Mui-focused": { color: "#000000" },
                            "&.MuiFormLabel-filled": { color: "#000000" },
                        },
                    },
                },
            ],
        },
    },
});
