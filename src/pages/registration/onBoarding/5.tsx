import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setWhatILikePage, whatILikePageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'
import { Input } from "../../../components/Input";
import styles from "../../../styles/onBoarding/onBoarding.module.css"
import useArray from 'react-use-array'

const OnBoardingPage5: NextPage = () => {
    let initState = useSelector((state: AppState)=>getFormState(state))[4] as whatILikePageIE
    let dispatch = useDispatch()
    const [ list, {
        set, empty, replace, push,
        updateAt, setAt, removeAt,
        filter, map, sort, reverse,
        mergeBefore, mergeAfter,
      }] = useArray(initState.things);
      
    let inputs = []

    const onInpChange = (number:number, value:string) =>{
        setAt(number, value )
    }

    for (let i=0; i<10; i++){
        let inp = <Input 
                    placeholder="Введи, что ты хочешь сделать"
                    value={list[i] as string}
                    onChange={(value)=>onInpChange(i, value)}
                ></Input>

        inputs.push(inp)
    }

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.h}>
                Как понять, <br/> 
                <span className={styles.hc}>
                что мне нравится?
                </span><br></br>
                <div className={styles.hs}>
                    Выбирать, пробовать, <br/>
                    снова Выбирать!
                </div>

            </div>
            <div className={styles.hss}>
                10 вещей, которые я хотел бы сделать, <br></br>
                но почему-то до сих пор не сделал:
            </div>
            <div className={styles.whoIWrpaper}>
                {inputs}
            </div>
            <img src="/images/union.svg" className={styles.union}></img>

            <div className={styles.linkWrapper} onClick={()=>dispatch(setWhatILikePage({things:list}))}>
                    <div className={styles.backLink}>
                        <Link href="/registration/onBoarding/4">Назад</Link>
                    </div>
                    <div className={styles.nextLink}>
                        <Link href="/registration/onBoarding/lastPage">Вперед</Link>
                    </div>
            </div>
            <img src="/images/union.svg" className={styles.union}></img>

        </div>
    )
}
export default OnBoardingPage5