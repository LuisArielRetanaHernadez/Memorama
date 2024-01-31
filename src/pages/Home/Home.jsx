import { useState } from "react"

// api
import { rooms } from "../../utils/api"

// components
import Search from "../../components/Search/Search"
import Room from "../../components/Room/Room"
import Pagination from "../../components/Pagination/Pagination"

const Home = () => {
  const [salas, setSalas] = useState(rooms)
  const [indexStart, setIndexStart] = useState(0)
  const [indexEnd, setIndexEnd] = useState(undefined)

  const updateIndex = (start, end) => {
    setIndexStart(start)
    setIndexEnd(end)
  }

  return (
    <section className="mt-2">
      <div className="w-2/5 m-auto mb-5 flex justify-center">
        <Search setSalas={setSalas} />
      </div>
      <div className="grid grid-cols-rooms grid-rows-rooms auto-rows-rooms gap-3 ">
        {salas.map((sala) => (
          <Room
            key={sala.id} 
            id={sala.id}
            title={sala.title}
          />
        )).slice(indexStart, indexEnd)}
      </div>
      <div className="flex justify-center">
        <Pagination total={salas.length} numbersPages={4} totalSource={6} updateIndex={updateIndex} />
      </div>
    </section>
  )
}

export default Home