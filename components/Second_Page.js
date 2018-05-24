import React, { Component } from 'react';
import '../presentation/index.css';
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


class Second_Page extends Component {
  render() {
    return (
      <div>
        <h1 className="tex">MigrantCV</h1>
        <div className="flex1">
          <h1 className="text">Mission</h1>
          <p>To help refugee to find a work in Switzerland</p>
          <img src='https://media.giphy.com/media/l0HlKtyQaBycmAfNC/giphy.gif' />
        </div>
        <div className="flex2">
          <h1 className="text1">Vision</h1>
          <p>To support to find maximum numbers of jobs for refugge</p>
        </div>

      </div>
    );
  }
}


export default Second_Page;
