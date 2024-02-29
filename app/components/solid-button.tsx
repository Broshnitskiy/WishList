import { FC } from "react";
import { Button } from "@mui/material";

interface SolidButtonProps {
  label: string;
  addStyles?: Record<string, any>;
}

const SolidButton: FC<SolidButtonProps> = ({ label, addStyles }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "#405eff",
        padding: "9px 14px",
        height: "36px",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "12px",
        color: "#fff",
        ...addStyles,
      }}
    >
      {label}
    </Button>
  );
};

export default SolidButton;
