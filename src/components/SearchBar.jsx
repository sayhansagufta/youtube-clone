import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Paper elevation={6} style={{ padding: "25px" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              label="Search..."
              onChange={this.handleChange}
              value={this.state.searchTerm} // Controlled component
            />
          </form>
        </Paper>
      </>
    );
  }
}

export default SearchBar;
