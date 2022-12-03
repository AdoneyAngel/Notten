import React from "react";
import icon from "../../icons/Notten.png"

import "../../styles/log.css"

import ShowPassCheckbox from "./ShowPassCheckbox";

export default class Signup extends React.Component{

    state = {
        showPassword: false
    }

    setShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
        console.log(this.state.showPassword)
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

                        <form action="">
                            <section>
                                <label>Email</label>
                                <input type="mail"/>
                            </section>
                            <section>
                                <label>User name</label>
                                <input type="text"/>
                            </section>
                            <section>
                                <label>Nick name</label>
                                <input type="text"/>
                            </section>
                            <section>
                                <label>Password</label>
                                <input type={`${this.state.showPassword ? "text" : "password"}`}/>
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