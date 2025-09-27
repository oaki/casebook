import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1040,
        pb: 6,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link href="/" style={{ display: "inline-block" }}>
        <Image
          src="/assets/nutricia-casebook-logo.svg"
          alt="NUTRICIA Casebook"
          width={339}
          height={120}
          priority
          style={{
            maxWidth: '339px',
            maxHeight: '120px',
            width: '100%',
            cursor: 'pointer'
          }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
