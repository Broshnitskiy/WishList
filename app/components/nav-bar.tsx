import { IoHomeOutline } from "react-icons/io5";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/arrow_right.svg";

const NavBar = () => {
  return (
    <Box component="nav" display="flex" alignItems="center" mb="10px">
      <Link
        href="/"
        style={{ marginRight: "15px", display: "flex", alignItems: "center" }}
      >
        <IoHomeOutline width="13" height="11" color="#999999" />
      </Link>

      <Image src={arrowRight} alt="Arrow icon" style={{ marginRight: "8px" }} />
      <Typography component="p" sx={{ fontSize: "12px", color: "#999" }}>
        Wishlist
      </Typography>
    </Box>
  );
};

export default NavBar;
