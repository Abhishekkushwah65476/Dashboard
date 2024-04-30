import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";


function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Home/>},
    {path:"/Sidebar",element:<Sidebar/>},
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
