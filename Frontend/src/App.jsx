import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState();
  //just demo code for using base api of backend
  useEffect(() => {
    (async () => {
      try {
        const baseurl = import.meta.env.VITE_BACKEND_BASE_URL;
        console.log("base" + baseurl);
        const response = await axios.get(`${baseurl}/`);
        setData(response);
        console.log(data);
        console.log(response);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <h1>ecommerce</h1>
    </>
  );
}

export default App;
