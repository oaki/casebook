'use client'
import Image from "next/image";

import { FC, useActionState, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PrimaryButton from "../../components/PrimaryButton";
import styled from "@emotion/styled";
import isEmail from "validator/lib/isEmail";
import { useFormStatus } from "react-dom";
import { sendLoginEmailAction } from "../actions/sendLoginEmailAction";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton type="submit" disabled={pending} loading={pending}>
      Continue
      <span style={{ paddingLeft: 6, fontSize: 18 }}>›</span>
    </PrimaryButton>
  );
};

const Login: FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const emailValid = isEmail(email);

  const [state, formAction] = useActionState(sendLoginEmailAction, {
    error: undefined,
    message: undefined,
  });

  useEffect(() => {
    if (state.message === "Success") {
      router.push("/verify-request");
    }
  }, [state.message, router]);

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
      <Box
        sx={{
          width: "100%",
          maxWidth: 1040,
          pb: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
          <Image
              src="/assets/nutricia-casebook-logo.svg"
              alt="NUTRICIA Casebook"
              width={339}
              height={120}
              priority
              style={{
                  maxWidth: '339px',
                  maxHeight: '120px',
                  width: '100%'
              }}
          />
      </Box>

      <Box sx={{ width: "100%", maxWidth: 680, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sign in to your account
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, mx: "auto", mb: 5 }}>
          Enter your email address and we&apos;ll send you a secure login link.
        </Typography>

        <form action={formAction}>
          <FormControl fullWidth sx={{ mb: 5 }}>
            <TextField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              variant="filled"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              error={!emailValid && email.length > 0}
              helperText={
                !emailValid && email.length > 0 ? "Please enter a valid email address" : ""
              }
            />
          </FormControl>

          <FormControlLabel
            required
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                sx={{ color: "#5a47ff" }}
              />
            }
            label={
              <Typography component={"span"}>
                I agree to the{" "}
                <Link href="/terms" target="_blank" rel="noopener">
                  Terms of Service
                </Link>
              </Typography>
            }
          />

          {state.error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {state.error}
            </Alert>
          )}

          <Box sx={{ mt: 4 }}>
            <SubmitButton />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default function LoginPage() {
  return <Login />;
}

const StyledLogo = styled(Image)`
  max-width: 339px;
  max-height: 120px;
  width: 100%;
`;
