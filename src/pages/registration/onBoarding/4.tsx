import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setWhoIPage, whoIPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'
import { WhoIToggle } from "../../../components/WhoIToggle";

const OnBoardingPage4: NextPage = () => {
    let initState = useSelector((state: AppState)=>getFormState(state))[3] as whoIPageIE

    const [introvert, setInrovert] = useState(initState.introvert)
    const [individualist, setIndividualist] = useState(initState.introvert)
    const [optimist, setOptimist] = useState(initState.introvert)
    const [organize, setOrganize] = useState(initState.introvert)
    const [serious, setSerious] = useState(initState.introvert)
    const [leader, setLeader] = useState(initState.introvert)

    let state = {
        individualist:individualist,
        introvert:introvert,
        optimist:optimist,
        organize:organize,
        serious:serious,
        leader:leader
    }as whoIPageIE


    let dispatch = useDispatch()
    return(
        <div>
            <div>Какой я?</div>
            <div>выбери одно из двух</div>
            <div>
                <WhoIToggle 
                    active={introvert}
                    onChange={(value)=>setInrovert(value)}
                    firstValue="Интроверт"
                    secondValue="Экстроверт"
                ></WhoIToggle>
                <WhoIToggle 
                    active={individualist}
                    onChange={(value)=>setIndividualist(value)}
                    firstValue="Индивидуалист"
                    secondValue="Командный игрок"
                ></WhoIToggle>
                <WhoIToggle 
                    active={optimist}
                    onChange={(value)=>setOptimist(value)}
                    firstValue="Оптимист"
                    secondValue="Пессимист"
                ></WhoIToggle>
                <WhoIToggle 
                    active={serious}
                    onChange={(value)=>setSerious(value)}
                    firstValue="Серьезный"
                    secondValue="Легкомысленный"
                ></WhoIToggle>
                <WhoIToggle 
                    active={organize}
                    onChange={(value)=>setOrganize(value)}
                    firstValue="Организованный"
                    secondValue="Творческий"
                ></WhoIToggle>
                <WhoIToggle 
                    active={leader}
                    onChange={(value)=>setLeader(value)}
                    firstValue="Лидер"
                    secondValue="Исполнитель"
                ></WhoIToggle>

            </div>
            <div onClick={()=>dispatch(setWhoIPage(state))}>
                    <Link href="/registration/onBoarding/3">Назад</Link>
                    <Link href="/registration/onBoarding/5">Вперед</Link>
            </div>
        </div>
    )
}
export default OnBoardingPage4