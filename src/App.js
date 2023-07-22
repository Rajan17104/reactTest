import logo from './logo.svg';
import './App.css';
import Course from './admin/course/Course';
import { Provider } from 'react-redux';

function App() {

  return (

    <Provider >
      <Course />
    </Provider>

  );
}

export default App;
