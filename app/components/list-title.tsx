import { Box, Typography, Switch, FormControlLabel } from "@mui/material";
import { Theme } from "@mui/material/styles";

const typographyStyles = (styles?: Record<string, any>) => (theme: Theme) => ({
  display: "none",

  [theme.breakpoints.up("lg")]: {
    display: "block",
    fontSize: "12px",
    lineHeight: "130%",
    textAlign: "center",
    color: "#303031",
    ...styles,
  },
});

const ListTitle = () => {
  return (
    <Box
      sx={(theme) => ({
        textAlign: "right",
        [theme.breakpoints.up("lg")]: {
          display: "flex",
          alignItems: "center",
        },
      })}
    >
      <Typography component="p" sx={typographyStyles({ ml: "30px" })}>
        Photo
      </Typography>
      <Typography component="p" sx={typographyStyles({ ml: "30px" })}>
        Product code
      </Typography>
      <Typography component="p" sx={typographyStyles({ ml: "30px" })}>
        Name
      </Typography>
      <Typography
        component="p"
        sx={typographyStyles({ ml: "auto", mr: "20px", opacity: 0.75 })}
      >
        Stock
      </Typography>
      <Typography component="p" sx={typographyStyles({ mr: "20px" })}>
        QTY
      </Typography>
      <Typography component="p" sx={typographyStyles({ mr: "20px" })}>
        Price
      </Typography>
      <FormControlLabel
        control={<Switch defaultChecked size="small" />}
        label={
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "130%",
              textAlign: "center",
              color: "#303031",
            }}
          >
            Image
          </Typography>
        }
      />
    </Box>
  );
};

export default ListTitle;
