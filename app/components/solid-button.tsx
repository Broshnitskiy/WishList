import { FC } from "react";
import { Button } from "@mui/material";

interface SolidButtonProps {
  label: string;
}

const SolidButton: FC<SolidButtonProps> = ({ label }) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: "#405eff",
        padding: "9px 14px",
        height: "36px",
        // width: "300px",
        fontWeight: 700,
        fontSize: "12px",
        color: "#fff",
      }}
    >
      {label}
    </Button>
  );
};

export default SolidButton;
