'use client'

import {SessionProvider} from 'next-auth/react'
import {ReactNode} from 'react'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/app/theme";


export default function Bootstrap({children}: BootstrapProps) {
    return (
        <SessionProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}

type BootstrapProps = {
    children: ReactNode
}
