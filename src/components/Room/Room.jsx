/* eslint-disable react/prop-types */
const Room = ({id, title}) => {

  return (
    <div className="p-2 rounded-md bg-indigo-800 relative">
      <div className="text-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <h4 className="">Historia</h4>
      </div>
      <div className=" mt-10">
        <span className="mr-3">Jugadores</span>
        <span>4</span>
      </div>

      <span className=" font-semibold absolute top-3">ID: {id}</span>
    </div>
  )
}

export default Room