import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="mt-24">
        <Outlet />
      </main>
    </>
  );
}

export default App;
