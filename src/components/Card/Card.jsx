/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const Card = ({content, refPair, selectedCards, setSelectedCards, matchedCards}) => {
  const [turned, setTurned] = useState(false);
  const [blockCard, setBlockCard] = useState(true);

  const handleTurned = () => {
    setTurned(prevent => !prevent);
  }

  useEffect(() => {
    if (turned) {
      setSelectedCards([...selectedCards, refPair])
    }
  }, [turned])

  useEffect(() => {
    if (matchedCards.some(pair => pair === refPair)) {
      setBlockCard(false)
    }
    if (selectedCards.length === 2) {
      setBlockCard(false)
    }
  }, [selectedCards, matchedCards, turned])

  useEffect(() => {
    if (selectedCards.some(pair => pair === refPair)) {
      setBlockCard(false)
    }
  }, [turned])

  const weTurned = () => {
    if (blockCard) {
      handleTurned()
    }
  }

  return (
    <div
    onClick={weTurned}
     className={`rounded-md relative ${turned ? 'card-flip' : ''} ${blockCard ? 'cursor-pointer' : 'cursort-not-allwed'}`}
     >
      <div className="w-full h-full rounded-md shadow-md shadow-blue-500 bg-white  flex justify-center items-center absolute backface-hidden rotate-x-180 ease-in back">
        <p className="font-semibold text-lg text-sky-700">
          {turned ? content : ''}
        </p>
      </div>
      <div className="w-full h-full rounded-md shadow-md shadow-blue-500 bg-white  flex justify-center items-center absolute backface-hidden rotate-y-0 ease-in front">
        <div>
          <span className="text-3xl text-sky-700 font-semibold">
            ¿?
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card