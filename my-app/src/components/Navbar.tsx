import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-xl">React + Typescript</h2>
        <ul className="flex flex-row md:flex-row gap-4 text-green-400">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contents">Contents</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar