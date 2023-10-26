import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import {createBrowserRouter} from "react-router-dom"
import Header from './Component/Header';
import appStore from './utils/appStore';

function App() {

  const appRouter = createBrowserRouter([{

  }])
  return (
    <div>
      <Provider store={appStore}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
