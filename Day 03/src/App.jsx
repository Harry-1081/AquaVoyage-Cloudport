import { States } from './States';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LandingPage from './Pages/LandingPage'
import DetailsPage from './Pages/DetailsPage';
import Login from './Pages/LoginPage';
import Signup from './Pages/SignupPage';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <States>
          <Routes>

          <Route 
            path='/'
            element=
            {<>
              <LandingPage/>
            </>}
          ></Route>

          <Route 
            path='/signup'
            element=
            {<>
              <Signup/>
            </>}
          ></Route>

          <Route 
            path='/login'
            element=
            {<>
              <Login/>
            </>}
          ></Route>

          <Route 
            path='/editpw'
            element=
            {<>
              <ForgotPassword/>
            </>}
          ></Route>

          <Route 
            path='/details'
            element=
            {<>
              <DetailsPage/>
            </>}
          ></Route>

          </Routes>
        </States>
      </BrowserRouter>
    </>
  )
}

export default App
