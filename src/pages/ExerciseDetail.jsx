import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Details from "../Components/Details";
import SimilarExercises from "../Components/SimilarExercises";
import ExerciseVideos from "../Components/ExerciseVideos";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      // console.log(exerciseDetailData);
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetails={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
