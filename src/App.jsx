import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
      <div className="min-h-screen bg-zinc-50">
        <NavBar />
        <main className="mt-32 md:mt-16 mb-8">
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default App;
