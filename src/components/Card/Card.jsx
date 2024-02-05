/* eslint-disable react/prop-types */
const Card = ({content}) => {

  return (
    <div className="bg-blue-400">
      <div>
        <p>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Card