
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminHome from './Components/AdminHome';
import AdminLogin from './Components/AdminLogin';
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/user-login' element={<UserLogin />} />
          <Route path='/admin/*' element={<AdminHome />} /> {/*we will write because we don't know the links to be displayed*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
