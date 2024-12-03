
import { Provider } from 'react-redux';
import './App.css'
import Home from 'Pages/Home';
import store from 'Redux/store';

function App() {
  

  return (
    <>
    <Provider store={store}>
      <Home/>
    </Provider>
    </>
  )
}

export default App
