import React, { useState } from "react";
import styles from "./event.module.css"
import {EventIE, EventTypes} from "../../app/types"
import { ClientRequestArgs } from "http";


const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
]

export const EventCard:React.FC<{args:EventIE}> = (props) =>{
    const [opened, setOpened] = useState(false)
    let typeColor = props.args.type == EventTypes.AIM? "#00FF47": props.args.type == EventTypes.COMMENT? "#FF2828":"#0085FF"

    return(
        <div>
            {
            
            !opened?
            
            <div className={styles.eventCard} onClick={()=>setOpened(true)}>
                <div className={styles.wrapText}>
                    <div>{props.args.name}</div>
                    <div style={{backgroundColor: typeColor}} className={styles.eventTypeBar}></div>
                </div>
                <div className={styles.wrapText}>
                    <div className={styles.date}>{props.args.date.getDate()}</div>
                    <div className={styles.moth}>{month[props.args.date.getMonth()-1]}</div>
                </div>
            </div>
            :
            <div>
                <div>
                    <img src="/images/cross.svg" onClick={()=> setOpened(false)}></img>
                </div>
            </div>
        }
    </div>
    )
}