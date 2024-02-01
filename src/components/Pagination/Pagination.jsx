import { useEffect, useState } from "react"
import { Link, useFetcher, useLocation } from "react-router-dom"

const Pagination = ({total, numbersPages = 1, totalSource, updateIndex}) => {
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  let location = useLocation()
  const totalPages = Math.ceil(total / totalSource )

  useEffect(() => {
    const numberPage = parseInt(location.search.split('=')[1]) || 1
    if (numberPage > totalPages || numberPage < totalPages) {
      setCurrentPage(1)
    } else {
      setCurrentPage(numberPage)
    }

  },[location])

  
  useEffect(() => {
    const indexStart = currentPage * totalSource - totalSource
    const indexEnd = currentPage * totalSource
    if (currentPage >= totalPages) {
      updateIndex(indexStart, undefined)
    } else {
      updateIndex(indexStart, indexEnd)
    }
  },[location])

  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      setPages(pages => [...pages, i])
    }

    return () => {
      setPages([])
    }
  },[total, currentPage, location])

  // cambiar el index de los links conforme al numero de la paginas


  return (
    <div className="mt-2 w-auto border border-blue-950 rounded-md bg-slate-100 inline-flex items-center">
      <div>
        <Link className="rounded-md px-2 py-2 inline-flex">
          Prev
        </Link>
      </div>
      <div className="flex">
        {pages.map((page, i) => (
          <Link
            key={i}
            to={`/?page=${page}`}
            className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex">{page}</Link>
        ))}
      </div>
      <div>
        <Link className="rounded-md px-2 py-2 inline-flex">
          Next
        </Link>
      </div>
    </div>
  )
}

export default Pagination