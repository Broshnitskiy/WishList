import { Box, Stack } from "@mui/material";
import ProdCard from "./card";
import { dataProdList } from "@/assets/data-prod-list";

const DataList = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        {dataProdList?.length > 0 &&
          dataProdList.map((prod) => <ProdCard key={prod.id} data={prod} />)}
      </Stack>
    </Box>
  );
};

export default DataList;
