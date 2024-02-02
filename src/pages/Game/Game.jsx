const Game = () => {

  return (
    <section className="bg-blue-400 min-h-wrapped-menu flex">
    <div className="w-[15%] h-wrapped-menu px-2 py-3 bg-white">
      <div className="mb-10 text-center">
        <h2 className=" text-3xl font-semibold tracking-wide">Title</h2>
        <span>50 segundos</span>
      </div>

      <div>
        <h3>Jugadores</h3>
        <ul>
          <li>Jugador 1</li>
          <li>Jugador 2</li>
          <li>Jugador 3</li>
        </ul>
      </div>

    </div>
    <div className="bg-green-600 flex-grow">
        {/*targets of gamer */}
      </div>
    </section>
  )
}

export default Game;