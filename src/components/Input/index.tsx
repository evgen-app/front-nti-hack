import React from "react";
import styles from "./inp.module.css"

interface InputIE{
    placeholder:string
    type?: string
    onChange:(value:string)=>void
    class?:string
}

export const Input:React.FC<InputIE> = (props) =>{
    return(
        <input
            placeholder={props.placeholder}
            type={props.type == undefined? "text":props.type}
            onChange={(e)=>props.onChange(e.target.value)}
            className={styles.inp + " " + props.class}
        ></input>
    )
}