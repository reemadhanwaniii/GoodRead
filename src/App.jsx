
import { Provider } from 'react-redux';
import './App.css'
import Home from 'Pages/Home';
import store from 'Redux/store';
import MainRoutes from 'Routes/MainRoutes';

function App() {
  

  return (
    <>
    <Provider store={store}>
      <MainRoutes />
    </Provider>
    </>
  )
}

export default App
