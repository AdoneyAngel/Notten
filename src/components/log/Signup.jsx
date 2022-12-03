import React from "react";
import icon from "../../icons/Notten.png"

import "../../styles/log.css"

export default class Signup extends React.Component{
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
                                <input type="text"/>
                            </section>
                            <button>Sign up</button>
                        </form>

                    </div>                    
                </div>
            </main>
        )
    }
}