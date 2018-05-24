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


class Third_Page extends Component {
  render() {
    return (
      <div>
        <h1 className="tex">MigrateCV</h1>
        <div className="flex1">
          <h1 className="text">Problem</h1>
          <p>We have large number of refugee who didnt find a jobs</p>
          <img src="https://www.avenir-suisse.ch/files/2018/06/Fotolia_70687198_XS.jpg" className="im1" />
        </div>
        <div className="flex2">
          <h1 className="text1">Solution</h1>
          <p>We build a web application as LinkedIn for refugge. </p>
          <img src="http://graduateinstitute.ch/files/live/sites/iheid/files/shared/news/2017/PROJECT%20INTEGRATION01.jpg" className="im2" />
        </div>
      </div>
    );
  }
}


export default Third_Page;
