import React from "react";
import styles from "./btn.module.css"


interface ButtonIE{
    class?:string
    isBig?:boolean
    onClick: ()=>void
    children: JSX.Element|string
}


export const Button: React.FC<ButtonIE> = (props) =>{
    return(
        <button    
            onClick={()=>props.onClick()}
            className={(props.isBig? styles.bigBtn:styles.btn) + " " + props.class}
        >{props.children}</button>
    )
}