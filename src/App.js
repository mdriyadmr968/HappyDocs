import {Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Details from "./Details/Details";
import RequireAuth from "./pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route
          path="/details"
          element={
            <RequireAuth>
              <Details></Details>
            </RequireAuth>
          }
        ></Route>

        
      </Routes>
    </div>
  );
}

export default App;
