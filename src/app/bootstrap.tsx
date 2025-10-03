'use client'

import {ReactNode} from 'react'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/app/theme";


export default function Bootstrap({children}: BootstrapProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

type BootstrapProps = {
    children: ReactNode
}
