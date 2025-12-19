import { GameHeader } from "./components/GameHeader/GameHeader";
import { Card } from "./components/Card/Card";
import { useState, useEffect } from "react";

const cardValues = [
    "👾",
    "🚀",
    "🛸",
    "🪐",
    "🌌",
    "🌠",
    "👽",
    "🤖",
    "👾",
    "🚀",
    "🛸",
    "🪐",
    "🌌",
    "🌠",
    "👽",
    "🤖"
];  // this array holds the values for the memory cards

function App() {
  // we'll use states to manage the game logic
  const [cards, setCards] = useState([]);

  const initGame = () => {
    // shuffle and set up the cards for a new game

    // we create an array of objects representing each card, to keep track of their state
    const finalCards = cardValues.map((value, index) => (
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }
    ));
    setCards(finalCards);
  };

  // we'll use the useEffect hook to initialize the game when the component mounts
  useEffect(() => {
    // don't allow clicking if already flipped or matched
    if (card.isFlipped || card.isMatched) return;
    // update card flipped state
    const newCards = cards.map((cardItem) => {
      if (cardItem.id === clickedCard.id) {
        // the ... notation means we copy all properties of the cardItem object, without modifying it 
        // then we set isFlipped to true
        return { ...cardItem, isFlipped: true };
      }
      else {
        // otherwise we return the card as is
        return cardItem;
      }
    });
    // update the cards state with the new array
    setCards(newCards);
  }, []);

  // we now need a function to handle card clicks
  const handleCardClick = (clickedCard) => {
    // logic to handle what happens when a card is clicked
    console.log("Card clicked:", clickedCard);
  };

  return (
    <div className="app">
      <GameHeader score={20} moves={13} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App;
