import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from './pages/login';
import Register from './pages/registration.js'  
import Planner from './pages/planner.js';
import Home from './pages/home.js';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element= {<Register/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/planner'  element= {<Planner/>}/>
          <Route path='/home'  element= {<Home/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
