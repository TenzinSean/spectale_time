// Import React
import React from "react";
import First_Page from '../components/First_Page';
import Second_Page from '../components/Second_Page';
import Third_Page from '../components/Third_Page';
import Four_Page from '../components/Four_Page';
import Five_Page from '../components/Five_Page';
import '../presentation/index.css';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Magic,
  Slide,
  Notes,
  Layout,
  Text
} from "spectacle";

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
  quarternary: "#CECECE",
  secondColor: "#f2fcfe",
  backgColor: "#274046",
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="backgColor" className="first-page1" bgSize="cover" bgDarken= "0.60" bgImage="http://cdn3.spiegel.de/images/image-1140116-860_poster_16x9-lrhh-1140116.jpg">
          <Heading size={2} fit caps lineHeight={2} textColor="#fff">
            Welcome To Refugee LinkedIn
          </Heading>
          <First_Page/>
          <ul>
            <li>Founder - Tenzin Sean & Rasul From POWERCODERS</li>
          </ul>
        </Slide>
        <Slide transition={["fade"]} bgColor="backgColor" padding="20px">
          <Second_Page/>
        </Slide>
        <Slide transition={["fade"]} bgColor="backgColor" padding="20px">
          <Third_Page />
        </Slide>
        <Slide transition={["fade"]} bgColor="backgColor" textColor="tertiary">
          <Heading size={2} fit caps lineHeight={0} textColor="#fff" margin="10px 0px 10px 0px">
            Our Prototype
          </Heading>
          <Four_Page/>

        </Slide>
        <Slide transition={["fade"]} bgColor="backgColor" textColor="tertiary">
          <Five_Page/>
        </Slide>
        <Slide transition={["fade"]} bgSize="cover" bgDarken= "0.40" bgImage="https://media.giphy.com/media/kHrWKmyLICrCM/giphy.gif" textColor="primary">
          <BlockQuote>
            <Quote textSize="45px">Thank you</Quote>
            <Cite textSize="30px" textColor="#fff" padding="25px">Tenzin Sean & Rashul from POWERCODERS</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
