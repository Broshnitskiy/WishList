"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "./icon-button";
import { categoryList } from "@/assets/category-list";

const FilterButtons = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all products");

  const modifiedCategoryList = categoryList.map((category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  });

  const handleClick = (category: string) => {
    setActiveCategory(category);
  };

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
      {modifiedCategoryList.length > 0 &&
        modifiedCategoryList.map((el: string) => (
          <IconButton
            key={el}
            label={el}
            active={activeCategory}
            handleClick={handleClick}
          />
        ))}
    </Box>
  );
};

export default FilterButtons;
