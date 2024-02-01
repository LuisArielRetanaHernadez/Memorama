/* eslint-disable react/prop-types */
const Room = ({id, title}) => {

  return (
    <div className="p-2 rounded-md bg-blue-400 shadow-xl relative">
      <div className="text-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <h4 className="">Historia</h4>
      </div>
      <div className="text-center mt-10">
        <span className=" text-xl font-semibold mr-3 block">Jugadores</span>
        <span className=" text-green-900">4</span>
      </div>

      <span className=" font-semibold absolute top-3">ID: {id}</span>
      <span className="font-semibold text-base absolute bottom-3" >Privadad</span>
    </div>
  )
}

export default Room