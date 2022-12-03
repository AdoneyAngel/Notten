import { render } from "@testing-library/react";
import React from "react";

import eye from "../../icons/eye.png"

export default function ShowPassCheckbox(props){
    return (
        <div onClick={() => props.callback()} className={`showPassCheckbox ${props.showPassword ? "showLogPass" : "hiddeLogPass"}`}>
            <img src={eye} />
        </div>
    )
}