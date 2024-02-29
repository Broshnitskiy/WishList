import { FC } from "react";
import { Card, CardContent, Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import OutlineButton from "./outline-button";

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
  };
}

const ProdCard: FC<IProdCardProp> = ({ data }) => {
  const { img, code, name, stock, qty, price, price_2 } = data;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={1}>
              <Image src={img} width={100} height={100} alt="image" />
            </Grid>
            <Grid item xs={1}>
              <Typography component="p" sx={{ fontSize: 14 }}>
                {code}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="p" sx={{ fontSize: 14 }}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="p" sx={{ fontSize: 14 }}>
                {stock}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="p" sx={{ fontSize: 14 }}>
                {qty}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography component="p" sx={{ fontSize: 14 }}>
                {price}
              </Typography>
              <Typography component="p" sx={{ fontSize: 14 }}>
                {price_2}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <OutlineButton
                label="Add to cart"
                addStyles={{
                  padding: "9px 10px",
                  width: "88px",
                  height: "34px",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProdCard;
