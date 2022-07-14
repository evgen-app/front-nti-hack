import React, { useState } from "react";
import styles from "./inp.module.css"

interface InputIE{
    placeholder:string
    type?: string
    onChange:(value:string)=>void
    class?:string
    value?:string
}

export const Input:React.FC<InputIE> = (props) =>{
    const [value, setValue] = useState(props.value == undefined? null: props.value)

    const onChange = (value:string) =>{
        setValue(value)
        props.onChange(value)
    }
    return(
        <input
    
            value={value}
            placeholder={props.placeholder}
            type={props.type == undefined? "text":props.type}
            onChange={(e)=>onChange(e.target.value)}
            className={styles.inp + " " + props.class}
        ></input>
    )
}