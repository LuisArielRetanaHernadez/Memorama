/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const Card = ({content, refPair, selectedCards, setSelectedCards, matchedCards}) => {
  const [turned, setTurned] = useState(false);
  const [blockCard, setBlockCard] = useState(false);
  const [isMatched, setIsMatched] = useState(false);

  const handleTurned = () => {
    setTurned(prevent => !prevent);
  }

  useEffect(() => {
    if (turned) {
      setSelectedCards([...selectedCards, refPair])
    }

  }, [turned])

  useEffect(() => {

    const isLimietReached = selectedCards.length === 2
    const isTurned = flipSomeCard(isLimietReached, turned)

    setBlockCard(isTurned)
  }, [selectedCards, turned])

  useEffect(() => {
    if (selectedCards.length === 2 && !isMatched) {
      setTimeout(() => {
        setTurned(false)
      }, 400)
    }
  }, [selectedCards, isMatched])

  useEffect(() => {
    if (isMatched) {
      setTurned(true)
    }
  }, [isMatched])

  useEffect(() => {
    handleMatched()
  }, [matchedCards])

  useEffect(() => {
    if (selectedCards.some(pair => pair === refPair)) {
      setBlockCard(true)
    }
  }, [turned])

  const handleMatched = () => {
    if (matchedCards.includes(refPair)) {
      setIsMatched(true)
    }
  }

  const flipSomeCard = (turn, isTurned) => {
    if (!turn && isTurned) {
      return true
    } else {
      return false
    }
  }

  const weTurned = () => {
    if (!blockCard) {
      handleTurned()
    }
  }

  return (
    <div
    onClick={weTurned}
     className={`rounded-md ${isMatched ? 'text-white bg-sky-500' : ''} relative ${turned ? 'card-flip' : ''} ${blockCard ? 'cursort-not-allwed' : 'cursor-pointer'}`}
     >
      <div className={`w-full h-full rounded-md shadow-md shadow-blue-500 ${isMatched ? 'text-white bg-sky-500' : 'bg-white'} flex justify-center items-center absolute backface-hidden rotate-x-180 ease-in back`}>
        <p className={`font-semibold text-lg ${isMatched ? 'text-white' : 'text-sky-700'}`}>
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