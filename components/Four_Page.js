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


class Four_Page extends Component {
  render() {
    return (
      <div>
        <h1 className="tex4">MigrantCV</h1>
        
      </div>
    );
  }
}


export default Four_Page;
