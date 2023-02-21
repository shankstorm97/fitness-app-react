import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../Components/Exercises";
import SearchExercises from "../Components/SearchExercises";
import HeroBanner from "../Components/HeroBanner";

const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
