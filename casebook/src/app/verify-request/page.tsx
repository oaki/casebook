import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function VerifyRequest() {
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
        <StyledLogo
          src="/assets/nutricia-casebook-logo.svg"
          alt="NUTRICIA Casebook"
          width={339}
          height={120}
          loading="eager"
        />
      </Box>

      <Box sx={{ width: "100%", maxWidth: 680, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Check your email
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, mx: "auto", mb: 5 }}>
          A sign in link has been sent to your email address. Please check your inbox and click the link to continue.
        </Typography>
      </Box>
    </Box>
  );
}

const StyledLogo = styled.img`
  max-width: 339px;
  max-height: 120px;
  width: 100%;
`;