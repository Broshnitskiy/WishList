"use client";

import { useState, FC } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

interface IFavouriteIconProps {
  favourite: boolean;
}

const FavouriteIcon: FC<IFavouriteIconProps> = ({ favourite }) => {
  const [isFavourite, setIsFavourite] = useState(favourite);
  return (
    <IconButton
      onClick={() => setIsFavourite((p) => !p)}
      sx={{
        border: "1px solid #e9ebef",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
      }}
    >
      {isFavourite ? (
        <FavoriteIcon sx={{ color: "#405EFF" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
};

export default FavouriteIcon;
