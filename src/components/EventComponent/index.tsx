import React from "react";
import styles from "./event.module.css"
import {EventIE, EventTypes} from "../../app/types"
import { EventCard } from "./eventCard";


interface EventComponentIE{
    events: EventIE[]
}



export const EventComponent:React.FC<EventComponentIE> = (props) =>{
    return(
        <div className={styles.eventWrapper}>
            {
                props.events.map((event)=>
                    <EventCard args={event}></EventCard>
                )
            }
        </div>
    )
}