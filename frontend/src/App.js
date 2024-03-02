import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/home";
import Navigationfun from "./navigation/links";
import About from "./components/about";
import Dataform from "./Form/form";
import Stopclock from "./components/stopclock";

const Navigtor = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigationfun />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/form" element={<Dataform />}></Route>
      <Route path="/stopclock" element={<Stopclock />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={Navigtor}>
      <Route>
        
        
      </Route>
    </RouterProvider>
  );
}

export default App;
