/* eslint-disable react/prop-types */
const Card = ({content}) => {

  return (
    <div className="rounded-md shadow-2xl shadow-black bg-white relative hover-rotate-x-180">
      <div className="w-full h-full flex justify-center items-center absolute backface-hidden rotate-x-180">
        <p className="font-semibold text-lg text-blue-900">
          {content}
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center absolute backface-hidden">
        <div>
          ¿Lo recuerdas?...
        </div>
      </div>
    </div>
  )
}

export default Card