import { FC } from "react";
import { Button } from "@mui/material";
import { MdDelete } from "react-icons/md";

interface IconButtonProps {
  label: string;
  active: string;
  handleClick: (a: string) => void;
}

const IconButton: FC<IconButtonProps> = ({ label, active, handleClick }) => {
  const isActive = active === label.toLowerCase();

  return (
    <Button
      variant="contained"
      endIcon={
        <MdDelete
          color={isActive ? "#fff" : "#B2BAC7"}
          style={{ transition: "background 0.3s, color 0.3s" }}
        />
      }
      sx={{
        fontWeight: 700,
        fontSize: "12px",
        color: isActive ? "#fff" : "#303031",
        borderRadius: "4px",
        padding: "4px 10px",
        height: "32px",
        background: isActive ? "#b2bac7" : "#e9ebef",
        justifyContent: "space-between",
        textTransform: "none",
      }}
      onClick={() => handleClick(label.toLowerCase())}
    >
      {label}
    </Button>
  );
};

export default IconButton;
