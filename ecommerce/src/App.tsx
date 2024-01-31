import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoutsData from "./utils/routes";
const router = createBrowserRouter(RoutsData);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
