//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import './App.css';
import Users from './Users';
import Repo from './Repo';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Users />}/>
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/repo/:id' element={<Repo/>}/>
      </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default App;
