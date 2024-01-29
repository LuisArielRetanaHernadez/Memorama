import { Link, Outlet } from "react-router-dom"

const Menu = () => {

  return (
    <>
      <header className="w-full h-14 bg-red-700">
        <div className="h-full p-2 flex justify-between items-center">
          <Link className="font-bold">
            <h1 className="">Matcha</h1>
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="#">
                </Link>
              </li>
              <li><Link href="#">Create</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Menu