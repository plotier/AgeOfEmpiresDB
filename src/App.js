import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import Routes from './Routes'
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <div>
       <Provider store={store}>
      <Routes />
      </Provider>
    </div>
  );
}

export default App;
