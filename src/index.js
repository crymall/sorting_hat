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
      "Aiden Shih", "Alejandro Franco", "Carlo Valenti", 
      "David Shin", "Eion Contaste", "Elon Jefferson", 
      "Eric Liu", "Gerson Castillo", "Helen Cho", 
      "Joyce Ajagbe", "Luiza Maciejak", "Michelle Shang", 
      "Simon Gaviria", "Ryan Omoruyi", "Ben Profit", 
      "Umed Ibrohimov", "Xavier Munroe"
    ]
    
    this.groupTwo = [
      "Sami Al Sudani", "Carolina Restrepo", "Dori Guzman", 
      "Eddie Harmon", "Greg Davis", "Jay Farah", 
      "Janhairis Fermin", "Jerell Davis", "Kelvin Rodriguez", 
      "Monique Mojica", "Newton Brooks", "Nick Chavez", 
      "Nicholas Pierre", "Princess Guerrero", "Romie Zelaya", 
      "Sergio Toxqui", "Shaedon Blackman", "Xsumi Oliver"
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
        <div>
          <h2> Today's Pairs </h2>
          <button onClick={this.createPairs}> Generate Pairs </button>
        </div>
      );
    } else {
      return (
        <div>
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
