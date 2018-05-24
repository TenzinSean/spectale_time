import React, { Component } from 'react';
//import { Text } from 'react';

// Import Spectacle Core tags


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

// Style for the page



const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  textColor: "#c2e9fb",
  text2Color: "#96e6a1",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


class Five_Page extends Component {
  render() {
    return (
      <div>
        <h1 className="tex4">MigrantCV</h1>
        <img src="https://trello-attachments.s3.amazonaws.com/5a8745bbbd0fadca3025f663/5b066a4708ec1e59f048696a/f3f2cb6e9a71d055c195810ea0002904/home.png" width="200px" className="image2"/>
      </div>
    );
  }
}


export default Five_Page;
