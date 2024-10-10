import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full px-5 py-6 flex justify-center gap-20 text-lg font-semibold uppercase bg-zinc-200 rounded-t mt-5">
      <NavLink
        className={(e) =>
          e.isActive ? ["text-black"].join(" ") : ["text-zinc-500"]
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(e) =>
          e.isActive ? ["text-black"].join(" ") : ["text-zinc-500"]
        }
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={(e) =>
          e.isActive ? ["text-black"].join(" ") : ["text-zinc-500"]
        }
        to="/users"
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Nav;
