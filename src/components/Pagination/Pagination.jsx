import { Link } from "react-router-dom"

const Pagination = ({total, amountPages}) => {

  return (
    <div className="w-80 border border-blue-950 rounded-md bg-slate-100 flex items-center">
      <div>
        <Link>Prev</Link>
      </div>
      <div className="flex">
        <Link className="bg-blue-950 text-white rounded-md px-2">1</Link>
        <Link className="bg-blue-950 text-white rounded-md px-2">2</Link>
        <Link className="bg-blue-950 text-white rounded-md px-2">3</Link>
      </div>
      <div>
        <Link>Next</Link>
      </div>
    </div>
  )
}

export default Pagination