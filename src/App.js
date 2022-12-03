import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import LoginPage from "./components/log/Login"
import SignupPage from "./components/log/Signup"

const App = class App extends React.Component{

  

  render(){
    return (
      <BrowserRouter>
        <Routes>
          {
            //LOGS PAGES
          }
          <Route path="login" element={
            <LoginPage />
          }></Route>

          <Route path="signup" element={
            <SignupPage />
          }></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
