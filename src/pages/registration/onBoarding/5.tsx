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
        <div>
            <div>
                Как понять, что мне нравится? <br></br>
                Выбирать, пробовать и снова Выбирать!
            </div>
            <div>
                10 вещей, которые я хотел бы сделать, <br></br>
                но почему-то до сих пор не сделал:
            </div>
            <div>
                {inputs}
            </div>
            <div onClick={()=>dispatch(setWhatILikePage({things:list}))}>
                    <Link href="/registration/onBoarding/4">Назад</Link>
                    <Link href="/registration/onBoarding/lastPage">Вперед</Link>
            </div>
        </div>
    )
}
export default OnBoardingPage5