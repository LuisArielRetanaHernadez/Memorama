import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Pagination = ({total, amountPages}) => {
  const [currentPage, setCurrentPage] = useState(1)

  let location = useLocation()

  useEffect(() => {
    const numberPage = parseInt(location.search.split('=')[1])
    if(numberPage) setCurrentPage(numberPage)
  },[location])

  return (
    <div className="mt-2 w-auto border border-blue-950 rounded-md bg-slate-100 inline-flex items-center">
      <div>
        <Link className="rounded-md px-2 py-2 inline-flex">
          Prev
        </Link>
      </div>
      <div className="flex">
        <Link className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex"
          to={`/?page=${currentPage}`}
          >1</Link>
        <Link className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex">2</Link>
        <Link className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex">3</Link>
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