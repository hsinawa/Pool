
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homescreen from './screens/homepage';
import Navbar from './Headers/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
    children: [
      {
        path: "Homescreen",
        element: <Homescreen />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
    <RouterProvider
    router={router}
    
  />
    </div>
  );
}

export default App;
