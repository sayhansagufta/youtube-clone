// import React from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  console.log(video);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "35%" }}>
        <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} style={{ borderRadius: "4px" }} />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.tile} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
