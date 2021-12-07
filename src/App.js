import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import './App.css';
import injectContext from './store/appContext';
// import { Route } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Auth from './views/auth';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
