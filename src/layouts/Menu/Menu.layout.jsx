import { Link, Outlet } from "react-router-dom"

const Menu = () => {

  return (
    <>
      <header className="w-full h-28">
        <div>
          <Link>
            <h1>Matcha</h1>
          </Link>
          <nav>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Menu