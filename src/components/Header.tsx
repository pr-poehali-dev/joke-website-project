
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover-scale">
          Joke Time
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-accent-foreground transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-accent-foreground transition duration-200">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/random" className="hover:text-accent-foreground transition duration-200">
                Random Joke
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
