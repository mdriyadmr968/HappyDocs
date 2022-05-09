import {Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./Details/Detail/Detail";
import Details from "./Details/Details/Details";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Details />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/details/:Id"
          element={
            <RequireAuth>
              <Detail></Detail>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
