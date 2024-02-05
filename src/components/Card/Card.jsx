/* eslint-disable react/prop-types */
const Card = ({content}) => {

  return (
    <div className="rounded-md shadow-2xl shadow-black bg-white flex items-center justify-center">
      <div>
        <p className="font-semibold text-lg text-blue-900">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Card