import React from "react";
import './App.css';
import Card from "./card.jsx";

import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";


class App extends React.Component{
  render() {
    return (
      <div className="container">
        <h1>Breaking News</h1>
        <Card
        picture={img1}
        pictureAlt="travel green list"
        tagLine="Green list change prompts holiday pricing chaos"
        p="The prices of flights and hotels for new green list travel destinations have swung sharply in both directions since the guidance was changed on Thursday."
        />

<Card
        picture={img2}
        pictureAlt="Liverpool"
        tagLine="Fears Liverpool may lose World Heritage status"
        p="The decision to recommend removing Liverpool's World Heritage status was painful, a Unesco director has said."
        />

<Card
        picture={img3}
        pictureAlt="UEFA EURO 2020"
        tagLine="Countdown to England vs Germany"
        p="England face Germany in the UEFA EURO 2020 round of 16 – all you need to know."
        />

<Card
        picture={img5}
        pictureAlt="Weather forcast"
        tagLine="Liverpool is set for a warm and sunny weekend"
        p="Merseyside has enjoyed a lot of sunny weather recently, but temperatures have been milder and wetter this week.."
        />

<Card
        picture={img4}
        pictureAlt="Luca in Pixar Latest"
        tagLine="Luca is 'personal and charming'"
        p="Pixar and Disney's latest animation Luca is 'a delight', a gentle yarn that induces nostalgia for youthful summer holidays, writes Nicholas Barber."
        />

<Card
        picture={img6}
        pictureAlt="Veggie lunch"
        tagLine="Healthy vegetarian breakfast recipe"
        p="Tuck into a nutritious, hearty veggie breakfast to keep you energised for the day."
        />

      </div>
    );
  }
}

export default App;

