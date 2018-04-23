import React from "react";
import ReactDom from "react-dom";
import "./style.css";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class PairApp extends React.Component {
  constructor() {
    super();

    this.groupOne = [
      "Sheriff Ahmed", "Emin Allen", "Jonathon Alston",
      "Rafael Li Chen", "Janette Correa", "Ashiya Dorria",
      "Stephanie Hou", "Deborah Huang", "Rachel Jackson",
      "Julissa Lema", "Vanessa Mack", "Eric Man",
      "Atiba Nurse", "Chaltin Pagan", "Cesarina Paula",
      "Asia Sewer", "Susan Tan"
    ]

    this.groupTwo = [
      "Kevin Anderson", "Angel Arias", "Andrew Caldwell",
      "Michael Flor", "Crystal Grant", "Susana Han",
      "Thomas Kenney", "Lucy Lao", "Guzal Latypova",
      "Kyla Massey", "Ivan Mendoza", "Le'Shanda Miller",
      "Steve Ramirez", "James Roberts", "Omari Rose",
      "Tasliym Twinamaani", "Fabio Ulerio", "Krystal Willock"
    ]

    this.state = {
      pairs: [],
      extra: ''
    };
  }

  createPairs = () => {
    const oneShuffled = shuffle(this.groupOne);
    const twoShuffled = shuffle(this.groupTwo);
    let newPairs = [];

    for (let i = 0; i < oneShuffled.length; i++) {
      newPairs.push([oneShuffled[i], twoShuffled[i]])
    }

    this.setState({
      pairs: newPairs,
      extra: twoShuffled[twoShuffled.length - 1]
    });
  }

  render() {
    let { pairs, extra } = this.state;

    if (pairs.length === 0) {
      return (
        <div className="wholeThing">
          <h2> Today's Pairs </h2>
          <button onClick={this.createPairs}> Generate Pairs </button>
        </div>
      );
    } else {
      return (
        <div className="wholeThing">
          <h2> Today's Pairs </h2>
          <button onClick={this.createPairs}> Generate Pairs </button>

          <ul>
            {
              pairs.map((pair) => {
                let coinFlip = Math.random();

                if (coinFlip < 0.5) {
                  return <li> {pair[0]} & {pair[1]} </li>
                } else {
                  return <li> {pair[1]} & {pair[0]} </li>
                }
              })
            }
            <li> Extra: {extra} </li>
          </ul>
        </div>
      )
    }
  }
}

ReactDom.render(<PairApp />, document.getElementById("root"));
