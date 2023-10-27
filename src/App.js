import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Header from './Component/Header';
import appStore from './utils/appStore';
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";

function App() {

  const appRouter = createBrowserRouter([{

    path:"/",
    element:<Body/>,
    children:[
     {
      path:"/",
      element:<MainContainer/>
     },
     {
      path:"watch",
      element:<WatchPage/>
     },
    ],
  }])
  return (
    <div>
      <Provider store={appStore}>
      <Header/>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
