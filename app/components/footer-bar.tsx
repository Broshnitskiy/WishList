"use client";

import SolidButton from "./solid-button";
import OutlineButton from "./outline-button";
import { Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const FooterBar = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  const buttonStyles = {
    padding: matches ? "9px 14px" : "9px 0",
    width: matches ? "300px" : "90px",
    height: "36px",
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        [theme.breakpoints.up("sm")]: {},
      })}
    >
      <Link href="/">
        <Box
          sx={(theme) => ({
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            [theme.breakpoints.up("sm")]: { gap: "14px" },
          })}
        >
          <KeyboardBackspaceIcon sx={{ color: "#405eff" }} />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#405eff",
            }}
          >
            Back
          </Typography>
        </Box>
      </Link>

      <Box
        sx={(theme) => ({
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          [theme.breakpoints.up("sm")]: { gap: "20px" },
        })}
      >
        <OutlineButton label="Add product" addStyles={buttonStyles} />
        <SolidButton label="Add to cart" addStyles={buttonStyles} />
      </Box>
    </Box>
  );
};

export default FooterBar;
