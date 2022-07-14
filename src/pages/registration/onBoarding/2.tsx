import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { Input } from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setSuperPowerPage, superPowerPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'
import { SelectSuperPower } from "../../../components/selectSuperPower";
import styles from "../../../styles/onBoarding/onBoarding.module.css"

const OnBoardingPage2: NextPage = () => {
    let initState = useSelector((state: AppState)=>getFormState(state))[1] as superPowerPageIE
    const [communication, setCommunication] = useState(initState.communication)
    const [coordination, setCoordination] = useState(initState.coordination)
    const [creative, setCreative] = useState(initState.creative)
    const [criticalThinking, setCriticalThinking] = useState(initState.criticalThinking)
    const [generateIdeas, setGenerateIdeas] = useState(initState.generateIdeas)
    const [searchResources, setSearchResources] = useState(initState.searchResources)
    const [achivment, setAchivment] = useState(initState.achivment)
    const [leaders, setLeaders] = useState(initState.leaders)

    let SuperPowerPageState = {
        communication: communication,
        coordination: coordination,
        creative: creative,
        criticalThinking:criticalThinking,
        generateIdeas:generateIdeas,
        searchResources:searchResources,
        achivment:achivment,
        leaders:leaders,
    } as superPowerPageIE

    let dispatch = useDispatch()

    return(
        <div className={styles.mainWrapper} >
            <div className={styles.h}>Какая у тебя <br></br>
                <span className={styles.hc}> "суперсила?"</span></div>
            <div className={styles.powerWrapper}>
                <div>
                    <div>Коммуникация и сотрудничество</div>
                    <SelectSuperPower active={communication} onChange={(value)=>setCommunication(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Генерация идей</div>
                    <SelectSuperPower active={generateIdeas} onChange={(value)=>setGenerateIdeas(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Организация и координация</div>
                    <SelectSuperPower active={coordination} onChange={(value)=>setCoordination(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Творчество, создание нового</div>
                    <SelectSuperPower active={creative} onChange={(value)=>setCreative(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Поиск ресурсов</div>
                    <SelectSuperPower active={searchResources} onChange={(value)=>setSearchResources(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Достижение и преодаление</div>
                    <SelectSuperPower active={achivment} onChange={(value)=>setAchivment(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Критическое мышление</div>
                    <SelectSuperPower active={criticalThinking} onChange={(value)=>setCriticalThinking(value)}></SelectSuperPower>
                </div>
                <div>
                    <div>Лидерство, умение вести за собой</div>
                    <SelectSuperPower active={leaders} onChange={(value)=>setLeaders(value)}></SelectSuperPower>
                </div>

            </div>
            <div className={styles.linkWrapper} onClick={()=>dispatch(setSuperPowerPage(SuperPowerPageState))}>
                    <div className={styles.backLink}>
                        <Link href="/registration/onBoarding/1">Назад</Link>
                    </div>
                    <div className={styles.nextLink}>
                        <Link href="/registration/onBoarding/3" className={styles.nextLink}>Вперед</Link>
                    </div>
            </div>
        </div>
    )
}

export default OnBoardingPage2
