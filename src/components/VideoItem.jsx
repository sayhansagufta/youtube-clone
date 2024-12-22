import { Grid, Paper, Typography } from "@mui/material";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", flexDirection: "column", cursor: "pointer", padding: "10px", transition: "0.3s" }}
        onClick={() => onVideoSelect(video)}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)")}
      >
        <img style={{ marginRight: "10px", marginBottom: "10px", borderRadius: "4px", width: "100%", height: "auto" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          <b>{video.snippet.title}</b>
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {video.snippet.channelTitle}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
