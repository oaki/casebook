import type {Metadata} from "next";
import "./globals.css";
import Bootstrap from "@/app/bootstrap";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "NUTRICIA Casebook",
    description: "Secure healthcare case management platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Bootstrap>
            {children}
        </Bootstrap>
        </body>
        </html>
    );
}
