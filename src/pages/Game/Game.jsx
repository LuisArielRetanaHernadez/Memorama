// fake-api
import { cards } from "../../utils/api";

// components
import Card from "../../components/Card/Card";
import { useEffect, useState } from 'react';
import BarGamer from "../../components/BarGamer/BarGamer";

const Game = () => {
  const [cardsMemory, setCardsMemory] = useState(cards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  
  useEffect(() => {
    if (selectedCards.length === 2) {
      const isMatch = selectedCards.every(pair => selectedCards[0] === pair)
      if (isMatch) {
        const redundancyMatch = matchedCards.includes(selectedCards[0])
        if (!redundancyMatch) {
          setMatchedCards([...matchedCards, selectedCards[0]])
        }
      }
      setSelectedCards([])
    }

  }, [selectedCards])


  return (
    <section className="h-wrapped-menu flex">
    <div className="w-[15%] h-wrapped-menu px-2 py-3 bg-white">
      <BarGamer />
    </div>
    <div className="flex-grow grid grid-cols-cards auto-rows-cards justify-center content-center gap-2">
        {cardsMemory.map(card => (
          <Card key={card.id} id={card.id} refPair={card.pair} content={card.content} selectedCards={selectedCards} setSelectedCards={setSelectedCards} matchedCards={matchedCards} />  // selectedCards={selectedCards} setSelectedCards={setSelectedCards}
        ))}
      </div>
    </section>
  )
}

export default Game;