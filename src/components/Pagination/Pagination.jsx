import { useEffect, useState } from "react"
import { Link, useFetcher, useLocation } from "react-router-dom"

const Pagination = ({total, numbersPages, totalSource}) => {
  const [pages, setPages] = useState([1,2,3,4])
  const [currentPage, setCurrentPage] = useState(0)

  let location = useLocation()

  useEffect(() => {
    const numberPage = parseInt(location.search.split('=')[1])
    const totalPages = Math.ceil(total / totalSource )
    console.log('total source ', totalPages)
    if (numberPage > totalPages || numberPage < totalPages) {
      setCurrentPage(1)
    } else {
      setCurrentPage(numberPage)
    }

  },[location])

  // cambiar el index de los links conforme al numero de la paginas


  return (
    <div className="mt-2 w-auto border border-blue-950 rounded-md bg-slate-100 inline-flex items-center">
      <div>
        <Link className="rounded-md px-2 py-2 inline-flex">
          Prev
        </Link>
      </div>
      <div className="flex">
        <Link className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex">{1}</Link>
        {pages.map((page, i) => (
          <Link key={i} className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex">{page}</Link>
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