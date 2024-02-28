import { FC } from "react";
import { Button } from "@mui/material";

interface OutlineButtonProps {
  label: string;
  addStyles?: Record<string, any>;
}

const OutlineButton: FC<OutlineButtonProps> = ({ label, addStyles }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        fontWeight: 700,
        fontSize: "12px",
        color: "#405eff",
        textTransform: "none",
        ...addStyles,
      }}
    >
      {label}
    </Button>
  );
};

export default OutlineButton;
