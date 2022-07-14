import React, { useState } from "react";
import styles from "./SelectSuperPower.module.css"

export const SelectSuperPower: React.FC<{active:Number, onChange: (value:number)=>void}> = (props) =>{
    let selectors = []

    for (let i=1; i<7; i++){
        let a = <div onClick={()=>props.onChange(i)} className={styles.selectSuperPower + " " + (props.active == i? styles.active: null)}></div>
        selectors.push(a)
    }
    
    
    return(
        <div className={styles.selectWrapper}>
            {selectors}
        </div>
    )
}