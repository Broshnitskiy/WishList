"use client";

import NavBar from "./nav-bar";
import { Typography, Box } from "@mui/material";
import FilterButtons from "./filter-buttons";
import OutlineButton from "./outline-button";
import ListTitle from "./list-title";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

const Toolbar = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      sx={(theme) => ({
        pt: "20px",
        pb: "10px",
        [theme.breakpoints.up("sm")]: {
          pt: "52px",
          pb: "6px",
        },
      })}
    >
      <NavBar />

      <Typography
        component="h1"
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "100%",
          color: "#303031",
          mb: "10px",
        }}
      >
        Wishlist
      </Typography>

      <Typography
        component="p"
        sx={{ fontSize: "12px", lineHeight: "130%", color: "#999", mb: "20px" }}
      >
        158 products
      </Typography>

      <Box
        component="div"
        gap="10px"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          mb: "20px",

          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        })}
      >
        <FilterButtons />

        <OutlineButton
          label="New category"
          addStyles={{
            padding: "9px 14px",
            width: matches ? "200px" : "auto",
            height: "32px",
          }}
        />
      </Box>

      <ListTitle />
    </Box>
  );
};

export default Toolbar;
