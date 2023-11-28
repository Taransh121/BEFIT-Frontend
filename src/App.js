import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { Homepage } from "./Containers/Homepage";
import { Login } from "./Containers/Login/Login";
import { Register } from "./Containers/Login/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTrainers } from "./Actions/TrainerAction";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTrainers())
    // eslint-disable-next-line
  }, [])
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Homepage} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
