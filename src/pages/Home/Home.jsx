import { useState } from "react"

// api
import { rooms } from "../../utils/api"
import Room from "../../components/Room/Room"

const Home = () => {
  const [salas, setSalas] = useState(rooms)

  return (
    <section>
      <div>
        {/*Search room gamer*/}
      </div>
      <div className="grid grid-cols-rooms grid-rows-rooms auto-rows-rooms gap-3 ">
        {salas.map((sala) => (
          <Room
            key={sala.id} 
            id={sala.id}
            title={sala.title}
          />
        ))}
      </div>
    </section>
  )
}

export default Home