import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-violet-100 shadow px-2 flex flex-col md:flex-row">
      <Link to="/" className="flex h-24 md:h-16 items-center justify-center">
        <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 mr-2" />
        <span className="text-xl md:text-3xl text-violet-800">
          Puurfect Adoption
        </span>
      </Link>
      <div className="flex space-x-4 mb-2 md:mb-0 justify-center md:ml-auto md:items-center">
        <Link
          to="/adoption-guide"
          className="hover:text-violet-500 hover:underline"
        >
          <p className="text-lg">Adoption Guide</p>
        </Link>
        <Link to="/resources" className="hover:text-violet-500 hover:underline">
          <p className="text-lg">Resources</p>
        </Link>
      </div>
    </nav>
  );
}
