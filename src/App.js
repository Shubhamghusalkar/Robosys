import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouteConfig } from './Container/RouteConfig';
import Toaster from './Component/Common/Toaster';
import axios from "axios";
import { getUserToken } from "./Config/user";

function App() {
  const token = getUserToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Content-Type"] = "application/json";
  console.log(getUserToken())
  return (
    <Router>
      <Routes >
        {RouteConfig.map((route, index)=> (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route path="toaster" element={<Toaster />} />
      </Routes>
    </Router>
  );
}

export default App;
