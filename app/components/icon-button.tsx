"use client";

import { FC, useState } from "react";
import { Button } from "@mui/material";
import { MdDelete } from "react-icons/md";

interface IconButtonProps {
  label: string;
}

const IconButton: FC<IconButtonProps> = ({ label }) => {
  const [isHovered, setHovered] = useState(false);

  const iconColor = isHovered ? "#fff" : "#B2BAC7";

  return (
    <Button
      variant="contained"
      endIcon={
        <MdDelete
          color={iconColor}
          style={{ transition: "background 0.3s, color 0.3s" }}
        />
      }
      sx={{
        fontWeight: 700,
        fontSize: "12px",
        color: "#303031",
        borderRadius: "4px",
        padding: "4px 10px",
        height: "32px",
        background: "#e9ebef",
        justifyContent: "space-between",
        "&:hover": {
          color: "#fff",
          background: "#b2bac7",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Button>
  );
};

export default IconButton;
