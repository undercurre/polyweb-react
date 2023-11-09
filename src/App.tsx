import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
