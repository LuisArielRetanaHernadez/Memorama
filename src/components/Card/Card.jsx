/* eslint-disable react/prop-types */
import { useState } from 'react'

const Card = ({content, refPair, setSelect}) => {
  const [turned, setTurned] = useState(false);
  const handleTurned = () => {
    setTurned(prevent => !prevent);
  }

  return (
    <div
    onClick={handleTurned}
     className={`rounded-md relative ${turned ? 'card-flip' : ''}`}
     >
      <div className="w-full h-full rounded-md shadow-2xl shadow-black bg-white  flex justify-center items-center absolute backface-hidden rotate-x-180 ease-in back">
        <p className="font-semibold text-lg text-blue-900">
          {content}
        </p>
      </div>
      <div className="w-full h-full rounded-md shadow-2xl shadow-black bg-white  flex justify-center items-center absolute backface-hidden rotate-y-0 ease-in front">
        <div>
          <span className="font-semibold">
            ¿Lo recuerdas?...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card