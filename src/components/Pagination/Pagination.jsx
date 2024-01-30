import { Link } from "react-router-dom"

const Pagination = ({total, amountPages}) => {

  return (
    <div className="mt-2 w-auto border border-blue-950 rounded-md bg-slate-100 inline-flex items-center">
      <div>
        <Link className="rounded-md px-2 py-2 inline-flex">
          Prev
        </Link>
      </div>
      <div className="flex">
        <Link className="text-white px-3 py-2 border-x border-x-slate-500 bg-blue-950 inline-flex">1</Link>
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