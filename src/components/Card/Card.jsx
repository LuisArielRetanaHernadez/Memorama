/* eslint-disable react/prop-types */
const Card = ({content}) => {

  return (
    <div className="rounded-md relative card-flip">
      <div className="w-full h-full rounded-md shadow-2xl shadow-black bg-white  flex justify-center items-center absolute backface-hidden rotate-x-180 ease-in back">
        <p className="font-semibold text-lg text-blue-900">
          {content}
        </p>
      </div>
      <div className="w-full h-full rounded-md shadow-2xl shadow-black bg-white  flex justify-center items-center absolute backface-hidden rotate-y-0 ease-in front">
        <div>
          ¿Lo recuerdas?...
        </div>
      </div>
    </div>
  )
}

export default Card