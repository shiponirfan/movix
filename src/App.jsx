import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div className="app">
    <h2>Movix</h2>
  </div>;
}

export default App;
