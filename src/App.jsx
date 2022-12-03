import React from "react";

import "./styles/app.css"

//firebse
import { collection, getDocs } from "firebase/firestore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//db
import firestoreDb from "./db/firestore"

//Components
import LoginPage from "./components/log/Login"
import SignupPage from "./components/log/Signup"

export default class App extends React.Component{

  getUsers = async () => {
    const usersRef = collection(firestoreDb, "users")

    const users = await getDocs(usersRef)

    return users.docs.map(user => user.data())
  }

  componentDidMount(){

  }

  render(){
    
    return (
      <BrowserRouter>
        <Routes>
          {
            //LOGS PAGES
          }
          <Route path="/" element={
            <LoginPage />
          }></Route>

          <Route path="/signup" element={
            <SignupPage />
          }></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}