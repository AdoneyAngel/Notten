import React from "react";
import icon from "../../icons/Notten.png"

import "../../styles/log.css"

import ShowPassCheckbox from "./ShowPassCheckbox";

export default class Signup extends React.Component{

    state = {
        showPassword: false,
        userName: "",
        userMail: "",
        userPass: "",
        nickname: ""
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

        const isEmail = this.state.userMail.match(this.props.mailRegularExpression)

        if(!isEmail || !this.state.userMail.length > 0){
            notification("We need a valid email")
            
        }else if(this.state.userName.length < 2){
            notification("Your user name must be 2 characters or more")
            
        }else if(this.state.nickname.length < 2){
            notification("Your nickname must be 2 characters or more")
            
        }else if(this.state.userPass.length < 2){
            notification("Your password must be 2 characters or more")
        }else {

            let exists = [
                {
                    exist: await this.props.findUser("email", this.state.userMail),
                    name: "email"
                },
                {
                    exist: await this.props.findUser("name", this.state.userName),
                    name: "user name"
                },
                {
                    exist: await this.props.findUser("nickname", this.state.nickname),
                    name: "nickname"
                }
            ]

            let emailExist = await this.props.findUser("email", this.state.userMail)
            let nameExist = await this.props.findUser("name", this.state.userName)
            let nicknameExist = await this.props.findUser("nickname", this.state.nickname)

            if(emailExist){
                notification("The email is already in use")
            }else if(nameExist){
                notification("The user name is already in use")
            }else if(nicknameExist){
                notification("The nickname is already in use")
            }else{
                const newUser = {
                    profile:{
                        name: this.state.userName,
                        mail: this.state.userMail,
                        pass: this.state.userPass,
                        nickname: this.state.nickname,
                        avatar: ""
                    },
                    examns: [],
                    examTags: []
                }

                this.props.signUp(newUser)
            }
        }
    }

    handleWriting = (element) => {
        this.setState({
            [element.target.name]: element.target.value
        })
    }

    render(){

        return (
            <main className="logMain logMainSignup">
                <div className="logMainContent">
                    <h1>Notten</h1>
                    <div className="logContentBox logContentBoxSignup">

                        <header>
                            <img src={icon}/>
                        </header>

                        <form onSubmit={(event) => this.handleFormSubmit(event)}>
                            <section>
                                <label>Email</label>
                                <input onChange={(e) => this.handleWriting(e)} name="userMail" type="mail"/>
                            </section>
                            <section>
                                <label>User name</label>
                                <input onChange={(e) => this.handleWriting(e)} name="userName" type="text"/>
                            </section>
                            <section>
                                <label>Nick name</label>
                                <input onChange={(e) => this.handleWriting(e)} name="nickname" type="text"/>
                            </section>
                            <section>
                                <label>Password</label>
                                <input onChange={(e) => this.handleWriting(e)} name="userPass" type={`${this.state.showPassword ? "text" : "password"}`}/>
                                <ShowPassCheckbox callback={this.setShowPassword} showPassword={this.state.showPassword} />
                            </section>
                            <button>Sign up</button>
                        </form>

                    </div>                    
                </div>
            </main>
        )
    }
}