import { styled } from "@mui/material/styles";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
// import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.handleSubmit("Timnas Indonesia");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAXR2asp8pCS3GldKbBctLbxqSDmLKn0Ho", // Replace with your actual API key
          q: searchTerm,
        },
      });
      this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
      // console.log(response.data); // Access the data from the response
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
    }
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <>
        <Grid justify="center" container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                {/* Search Bar */}
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={12} md={8}>
                {/* Video Details */}
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={12} md={4}>
                {/* Video List */}
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

{
  /* <h1>Youtube Clone API</h1> */
}

export default App;
