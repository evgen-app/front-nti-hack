import React from "react";
import styles from "./toggle.module.css"

interface toggleIE{
    active: boolean
    firstValue: string
    secondValue:string
    onChange: (value: boolean) => void
}

export const WhoIToggle:React.FC<toggleIE> = (props) =>{
    return(
        <div className={styles.wrapper}>
            <div 
                onClick={()=>props.onChange(true)}
                className={styles.value + " " + (props.active == true? styles.active:null)}
            >{props.firstValue}</div>

            <div
                onClick={()=>props.onChange(false)}
                className={styles.value  + " " + ( props.active == false?  styles.active:null)}
            >{props.secondValue}</div>

        </div>
    )
}