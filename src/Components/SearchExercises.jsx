import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData();
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        marginBottom="50px"
        textAlign="center"
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box
        position="relative"
        mb="72px"
        // display="flex"
        // flexDirection="column"
        // alignItems="center"
      >
        <TextField
          sx={{
            input: { fontWeight: 700, border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="72px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", sm: "14px" },
            height: "56px",
            position: "absolute",
            right: "0px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
