import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos.length);
  if (!exerciseVideos.length) return <Loader />;
  console.log(exerciseVideos.slice(0, 4));
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h3" mb="33px">
        Watch
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {` ${name} `}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 9).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="black" textTransform="capitalize">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="black">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
