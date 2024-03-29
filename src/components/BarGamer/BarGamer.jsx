import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BarGamer = () => {

  return (
    <div className="w-full h-full">
       <div className="mb-10 text-center">
        <h2 className=" text-3xl font-semibold tracking-wide mb-3">Title</h2>
        <span className=" text-lg font-bold">50 segundos</span>
      </div>

      <div>
        <div className="mb-4 flex justify-center items-center">
          <div className="text-blue-500 p-2 rounded-xl bg-gray-200 inline-flex justify-center items-center">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            <h3 className="font-semibold">Jugadores</h3>
          </div>
        </div>
        <ul className="font-semibold flex flex-col items-center gap-2">
          <li className="w-max text-blue-500 p-2 rounded-xl bg-gray-200">Jugador 1</li>
          <li className="w-max text-red-500 p-2 rounded-xl bg-gray-200">Jugador 2</li>
          <li className="w-max text-green-500 p-2 rounded-xl bg-gray-200">Jugador 3</li>
        </ul>
      </div>
    </div>
  )
}

export default BarGamer