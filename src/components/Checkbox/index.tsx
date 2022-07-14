import React from "react";
import styles from "./checkbox.module.css"

interface checkboxIE{
    active:boolean
    children:JSX.Element|string
    class?:string
    onClick:()=>void
}

export const Checkbox:React.FC<checkboxIE> = (props) =>{
    return(
        <div className={styles.checkBox + " " + props.class} onClick={()=>props.onClick()}>
            <div className={styles.box}>{props.active? <img src="/images/check.svg"></img>: null}</div>
            <div>
                {props.children}
            </div>
        </div>
    )
}