import Home from "./components/home";
import Stuff from "./components/stuff";
import Contact from "./components/contact";
import Class from "./components/class";
import Student from "./components/student";
import TodoList from "./components/todo_list";
import {
  Outlet,
  Routes,
  Route,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Simple Single Page Application</h1>
      <ul className="header">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stuff"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Stuff
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/class"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Class
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todo"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            ToDo
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <div className="content">
      <Routes>
        {/* render whatever is found in the url path
        if url has stuff render component Stuff */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/stuff"} element={<Stuff />} />
        <Route path={"/contact"} element={<Contact />} />
        {/* outlet is always needed when nesting routes, then specify the default child (index)  */}
        <Route path={"/class"} element={<Outlet />}>
          {/* A nested route, when more niveaus are needed. */}
          <Route index element={<Class />} />
          {/* the colon means that it is a parameter, not a hardcoded route */}
          <Route path={":id"} element={<Student />} />
        </Route>
        <Route path={"/todo"} element={<TodoList />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    // incapsulate the whole application in the react browserRouter.
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
