import { FC } from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import OutlineButton from "./outline-button";
import FavouriteIcon from "./favourite-icon";
import CloseIcon from "@mui/icons-material/Close";

interface IProdCardProp {
  data: {
    id: number;
    img: StaticImageData;
    code: number;
    name: string;
    stock: string;
    qty: string;
    price: string;
    price_2: string;
    category: string;
    favourite: boolean;
  };
}

const ProdCard: FC<IProdCardProp> = ({ data }) => {
  const { img, code, name, stock, qty, price, price_2, favourite } = data;

  const tStyles = { fontSize: "12px", textAlign: "center", color: "#303031" };

  return (
    <Card sx={{ minWidth: 275, padding: "5px 10px" }}>
      <Grid container alignItems="center" spacing={{ xs: 1, lg: 0 }}>
        <Grid
          item
          xs={12}
          sm={2}
          md={1}
          sx={{ lineHeight: 0, textAlign: "center" }}
        >
          <Image src={img} width={100} height={100} alt="image" />
        </Grid>
        <Grid item xs={12} sm={2} lg={1}>
          <Typography component="p" sx={tStyles}>
            {code}
          </Typography>
        </Grid>
        <Grid item xs={12} sm>
          <Typography
            component="p"
            sx={{ ...tStyles, fontWeight: 700, textAlign: "start" }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item lg={0.9} sx={{ textAlign: "center" }}>
          <Typography component="p" sx={tStyles}>
            {stock}
          </Typography>
        </Grid>
        <Grid item lg={1} sx={{ textAlign: "center" }}>
          <Typography component="p" sx={{ ...tStyles, fontWeight: 700 }}>
            {qty}
          </Typography>
        </Grid>
        <Grid item lg={1} sx={{ textAlign: "center" }}>
          <Typography component="p" sx={{ ...tStyles, fontWeight: 700 }}>
            {price}
          </Typography>
          <Typography component="p" sx={tStyles}>
            {price_2}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2} lg={1} sx={{ textAlign: "center" }}>
          <OutlineButton
            label="Add to cart"
            addStyles={{
              padding: "9px 10px",
              width: "88px",
              height: "34px",
            }}
          />
        </Grid>
        <Grid item lg={0.5} sx={{ textAlign: "right" }}>
          <FavouriteIcon favourite={favourite} />
        </Grid>
        <Grid item lg={0.5} sx={{ textAlign: "right" }}>
          <IconButton sx={{ width: "26px", height: "26px" }}>
            <CloseIcon sx={{ color: "#303031" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProdCard;
