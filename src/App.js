//https://www.notion.so/2d3360e394b1469d865912e107d12da1?v=6c4482aedc514372845435433bd6b78f

import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <ToastContainer position='bottom-center' draggable />

      <Switch>
        <Route exact path='/' component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
