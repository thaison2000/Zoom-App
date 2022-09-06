import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  const [user,setUser] = useState<any>()

  const { userToken } = useSelector(
    (state: any) => state.user
  )

  useEffect(()=>{
    setUser(localStorage.getItem('userToken'))
  },[userToken])

  return (
    <div className="App" style={{
      width: '100vw',
      height: '100vh'
    }}>
       <Routes>
        <Route path="/" element={user ? <Home /> : <Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
