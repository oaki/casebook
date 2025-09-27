import { Box, CircularProgress } from '@mui/material';
import Logo from "@/components/Logo";

export const VerificationLoading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 200,
                gap: 3
            }}
        >
            <Logo />
            <CircularProgress
                size={50}
                sx={{
                    color: '#4814A7'
                }}
            />
        </Box>
    );
};
