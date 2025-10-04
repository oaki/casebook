'use client'
import { FC } from "react";
import { Box } from "@mui/material";
import Logo from "../../../components/Logo";
import LoginForm from "./form";

const LoginPage: FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 6,
      }}
    >
      <Logo />
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
