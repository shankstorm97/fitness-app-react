import { Stack } from "@mui/material";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      justifyContent="center"
    >
      <InfinitySpin color="grey" />
    </Stack>
  );
};

export default Loader;
