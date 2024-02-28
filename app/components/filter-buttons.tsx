"use client";

import { Box } from "@mui/material";
import IconButton from "./icon-button";

const FilterButtons = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: "10px",

        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        },
      })}
    >
      <IconButton label="All products" />
      <IconButton label="Phones" />
      <IconButton label="Accessories" />
    </Box>
  );
};

export default FilterButtons;
