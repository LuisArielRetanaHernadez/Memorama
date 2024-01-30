import { Link } from "react-router-dom"

const Pagination = ({total, amountPages}) => {

  return (
    <div className=" border border-blue-950 rounded-md bg-slate-100 flex items-center">
      <div>
        <Link>Prev</Link>
      </div>
      <div className="flex">
        <Link className="bg-blue-950 text-white rounded-md px-3">1</Link>
        <Link className="bg-blue-950 text-white rounded-md px-3">2</Link>
        <Link className="bg-blue-950 text-white rounded-md px-3">3</Link>
      </div>
      <div>
        <Link>Next</Link>
      </div>
    </div>
  )
}

export default Pagination