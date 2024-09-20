import "./App.css";
import MainMenu from "./Components/mainMenu/MainMenu.tsx";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
}

export default App;
