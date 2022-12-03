import React from "react";
import icon from "../../icons/Notten.png"

import "../../styles/log.css"

import ShowPassCheckbox from "./ShowPassCheckbox";

export default class Login extends React.Component{

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
            <main className="logMain">
                <div className="logMainContent">
                    <h1>Notten</h1>
                    <div className="logContentBox logContentBoxLogin">

                        <header>
                            <img src={icon}/>
                        </header>

                        <form action="">
                            <section>
                                <label>Email</label>
                                <input type="mail"/>
                            </section>
                            <section>
                                <label>Password</label>
                                <input type="text"/>
                                <ShowPassCheckbox callback={this.setShowPassword} showPassword={this.state.showPassword} />
                            </section>
                            <button>Log in</button>
                        </form>

                    </div>                    
                </div>
            </main>
        )
    }
}