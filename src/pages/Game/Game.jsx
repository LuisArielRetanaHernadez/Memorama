const Game = () => {

  return (
    <section className="bg-blue-400 min-h-wrapped-menu flex">
    <div>
      <div className="bg-blue-900 h-wrapped-menu">
      <h2>Title</h2>
      <span>50 segundos</span>
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