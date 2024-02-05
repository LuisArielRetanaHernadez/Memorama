import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// fake-api
import { cards } from "../../utils/api";

// components
import Card from "../../components/Card/Card";
import { useState } from 'react';

const Game = () => {
  const [cardsMemory, setCardsMemory] = useState(cards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([])

  return (
    <section className="h-wrapped-menu flex">
    <div className="w-[15%] h-wrapped-menu px-2 py-3 bg-white">
      <div className="mb-10 text-center">
        <h2 className=" text-3xl font-semibold tracking-wide mb-3">Title</h2>
        <span className=" text-lg font-bold">50 segundos</span>
      </div>

      <div>
        <div className="mb-4 flex justify-center items-center">
          <div className="text-blue-500 p-2 rounded-xl bg-gray-200 inline-flex justify-center items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            <h3 className="font-semibold">Jugadores</h3>
          </div>
        </div>
        <ul className="font-semibold flex flex-col items-center gap-2">
          <li className="w-max text-blue-500 p-2 rounded-xl bg-gray-200">Jugador 1</li>
          <li className="w-max text-red-500 p-2 rounded-xl bg-gray-200">Jugador 2</li>
          <li className="w-max text-green-500 p-2 rounded-xl bg-gray-200">Jugador 3</li>
        </ul>
      </div>

    </div>
    <div className="flex-grow grid grid-cols-cards auto-rows-cards justify-center content-center gap-2">
        {/*targets of gamer */}
        {cardsMemory.map(card => (
          <Card key={card.id} content={card.content} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />  // selectedCards={selectedCards} setSelectedCards={setSelectedCards}
        ))}
      </div>
    </section>
  )
}

export default Game;