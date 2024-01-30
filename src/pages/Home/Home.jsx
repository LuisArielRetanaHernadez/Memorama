import { useState } from "react"

// api
import { rooms } from "../../utils/api"

// components
import Search from "../../components/Search/Search"
import Room from "../../components/Room/Room"

const Home = () => {
  const [salas, setSalas] = useState(rooms)

  return (
    <section className="mt-2">
      <div>
        <Search setSalas={setSalas} />
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