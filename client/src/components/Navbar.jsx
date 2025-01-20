import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          {/* <img className="h-10 inline" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"></img>  */}
          <p className="font-semibold"><a href="https://github.com/EmaniAditya/employee-records" target="_blank">View Code</a></p>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}
