import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RoutsData from "./utils/routes";

const router = createBrowserRouter(RoutsData);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
