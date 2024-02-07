import { Link, Outlet } from "react-router-dom"

const Menu = () => {

  return (
    <>
      <header className="w-full h-14 bg-blue-700">
        <div className="h-full p-5 flex justify-between items-center">
          <Link className="font-bold">
            <h1 className="">Matcha</h1>
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="#" className="inline-block">
                  <span className="inline-block p-1">Crear</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block">
                  <span className="inline-block p-1">Home</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Menu