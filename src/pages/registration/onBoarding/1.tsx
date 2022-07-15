import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { Input } from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setWhyPage, whyPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'
import styles from "../../../styles/onBoarding/onBoarding.module.css"

const OnBoardingPage1: NextPage = () => {
    let initState = useSelector((state: AppState)=>getFormState(state))[0] as whyPageIE


    const [whatIwantGet, setWhatIwantGet] = useState(initState.whatIwantGet)
    const [whatIwantKnown, setWhatIwantKnown] = useState(initState.whatIwantKnown)
    const [whatIwantLearn, setWhatIwantLearn] = useState(initState.whatIwantLearn)
    let dispatch = useDispatch()
    
    let WhyPageState = {
        whatIwantGet:whatIwantGet,
        whatIwantKnown:whatIwantKnown,
        whatIwantLearn:whatIwantLearn
    } as whyPageIE

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.h}>Прежде чем что-то <br></br>
            <span className={styles.hc}>сделать,</span> <br></br> спроси себя <br></br><span className={styles.hc}>"Зачем?"</span></div>
            <div className={styles.whoIWrpaper}>
                <div>
                    <div>Я хочу узнать:</div>
                    <Input value={initState.whatIwantKnown} class={styles.inp1} placeholder="что хотите узнать?" onChange={(value)=>setWhatIwantKnown(value)}></Input>
                </div>
                <div>
                    <div>Я хочу получить:</div>
                    <Input class={styles.inp1} value={initState.whatIwantGet} placeholder="что хотите получить?" onChange={(value)=>setWhatIwantGet(value)}></Input>
                </div>
                <div>
                    <div>Я хочу научится:</div>
                    <Input class={styles.inp1} value={initState.whatIwantLearn} placeholder="чему вы хотите научится?" onChange={(value)=>setWhatIwantLearn(value)}></Input>
                </div>
            </div>
            
            <div className={styles.linkWrapper} onClick={()=>dispatch(setWhyPage(WhyPageState))}>
                <div className={styles.backLink}>
                    <Link href="/registration/onBoarding" >Назад</Link>
                </div>
                <div className={styles.nextLink}>   
                    <Link href="/registration/onBoarding/2">Вперед</Link>
                </div>
            </div>
            <img src="/images/union.svg" className={styles.union}></img>

        </div>
    )
}
export default OnBoardingPage1
