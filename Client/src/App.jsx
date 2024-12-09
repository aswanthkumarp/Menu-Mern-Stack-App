import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuBar from "./components/MenuBar";

import ToggleButtons from "./components/ToggleButtons";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MenuProvider } from "./context/MenuContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuProvider>
        <MenuBar />
        <ToggleButtons />
        <Footer />
        <ToastContainer />
      </MenuProvider>
    </>
  );
}

export default App;
