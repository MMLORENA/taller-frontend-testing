import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "../components/Header.tsx";

export const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
