import { NavLink, Outlet } from "react-router-dom";
export default function Navigationfun() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className=" col-11">
            <NavLink to="/"></NavLink>
            <NavLink
              to="/home"
              className=" m-3 btn btn-success bi bi-house"
            ></NavLink>
            <NavLink
              to="/form"
              className=" m-3 btn btn-success bi bi-file-plus"
            >
              Add
            </NavLink>
            <NavLink to="/stopclock" className=" m-3 btn btn-success">
              StopWatch
            </NavLink>
            <NavLink to="/about" className=" m-3 btn btn-success">
              About
            </NavLink>
          </div>
        </nav>
      </header>
      <main className=" m-2 ">
        <Outlet />
      </main>
    </div>
  );
}
