/* eslint-disable react/prop-types */
const Room = ({id, title}) => {

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <h4>Historia</h4>
      </div>
      <div>
        <span>Jugadores</span>
        <span>4</span>
      </div>

      <span>{id}</span>
    </div>
  )
}

export default Room