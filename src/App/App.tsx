import { Outlet } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};

export default App;
