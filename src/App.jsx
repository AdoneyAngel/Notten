import React from "react";

import "./styles/app.css"

//firebse
import { collection, getDocs, addDoc } from "firebase/firestore";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//db
import firestoreDb from "./db/firestore"

//Components
import LoginPage from "./components/log/Login"
import SignupPage from "./components/log/Signup"
import Notification from "./components/Notification";

export default class App extends React.Component{

  state = {
    notification: false,
    notificationText: "",
    notificationStyle: {},
    userProfile: {}
  }

  mailRegularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  getUsers = async () => {
    const usersRef = collection(firestoreDb, "users")

    const users = await getDocs(usersRef)

    return users.docs.map(user => user.data())
  }

  findUserLog = async (type, value, pass) => {
    const users = await this.getUsers()
    let userFound

    users.filter(user => {

      if(type == "email" && user.profile.mail == value && user.profile.pass === pass){
        userFound = user

      }else if(type == "name" && user.profile.name == value && user.profile.pass === pass){
        userFound = user

      }else if(user.profile.name == value || user.profile.mail == value && user.profile.pass === pass){
        userFound = user

      }
    })

    return userFound
  }

  findUser = async (type, value) => {//user mail / username
    const users = await this.getUsers()

    let userFound

    users.map(user => {
      if(type === "email" && user.profile.mail == value || type === "name" && user.profile.name == value || type === "nickname" && user.profile.nickname == value){
        userFound = user
      }
    })

    return userFound
  }

  signIn = (user) => {
    delete user.profile.pass
    
    this.setState({
      userProfile: user
    })
  }

  signUp = async (user) => {
    const DbCollection = collection(firestoreDb, "users")

    const signUp = await addDoc(DbCollection, user)

    console.log("sign up succes")

    return user

  }

  notification = async (text, style) => {
    this.setState({
      notification: true,
      notificationText: text,
      notificationStyle: style
    }, async () => {
      setTimeout(() => {
        this.setState({
          notification: false,
          notificationText: "",
          notificationStyle: {}
        })
      }, 4000)
    })
  }

  render(){
    
    return (
      <BrowserRouter>
      {
        this.state.notification ? <Notification text={this.state.notificationText} style={this.state.notificationStyle}/> : null
      }
        
        <Routes>
          {
            //LOGS PAGES
          }
          <Route path="/" element={
            <LoginPage
            mailRegularExpression={this.mailRegularExpression}
            notification={this.notification}
            findUserLog={this.findUserLog}
            signIn={this.signIn} />
          }></Route>

          <Route path="/signup" element={
            <SignupPage
            mailRegularExpression={this.mailRegularExpression}
            notification={this.notification}
            findUserLog={this.findUserLog}
            findUser={this.findUser}
            signUp={this.signUp}
            signIn={this.signIn} />
          }></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}