import React from "react";
import { Link } from "react-router-dom";
import icon from "../../icons/Notten.png"

import "../../styles/log.css"

import ShowPassCheckbox from "./ShowPassCheckbox";

export default class Login extends React.Component{

    state = {
        showPassword: false,
        userPass: "",
        userMail: "",
        userPassItem: {},
        userMailItem: {}
    }

    setShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleFormSubmit = async (formEvent) => {
        formEvent.preventDefault()
        let notification = (text) => this.props.notification(text, {
            background: "var(--notification-red)",
            color: "white"
        })

        if(this.state.userPass.length < 2){
            notification("Invalid password")

        }else {
            this.props.findUserLog(undefined, this.state.userMail, this.state.userPass).then(userFound => {
                if(userFound){
                    this.props.signIn(userFound)
                }else{
                    notification("Email/name or user is not valid")
                }
            })
        }

    }

    handleWriting = (element) => {
        this.setState({
            [element.target.name]: element.target.value,
            [`${element.target.name}Input`]: element.target
        })
    }

    render(){

        return (
            <main className="logMain">
                <div className="logMainContent">
                    <h1>Notten</h1>
                    <div className="logContentBox logContentBoxLogin">

                        <header>
                            <img src={icon}/>
                        </header>

                        <form onSubmit={(event) => this.handleFormSubmit(event)}>
                            <section>
                                <label>Email / User name</label>
                                <input onChange={(e) => this.handleWriting(e)} name="userMail" type="mail"/>
                            </section>
                            <section>
                                <label>Password</label>
                                <input id="inputLogPassForm" onChange={(e) => this.handleWriting(e)} name="userPass" type={`${this.state.showPassword ? "text" : "password"}`}/>
                                <ShowPassCheckbox callback={this.setShowPassword} showPassword={this.state.showPassword} />
                            </section>
                            <button>Log in</button>
                            <Link to="/signup">Do you not have an account? Sign up</Link>
                        </form>

                    </div>                    
                </div>
            </main>
        )
    }
}