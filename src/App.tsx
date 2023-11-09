import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
