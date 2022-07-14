import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { Input } from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setWhyPage, whyPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'

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
        <div>
            <div>Прежде чем что-то сделать, спроси себя "Зачем?"</div>
            <div>
                <div>Я хочу узнать:</div>
                <Input value={initState.whatIwantKnown} placeholder="что хотите узнать?" onChange={(value)=>setWhatIwantKnown(value)}></Input>
            </div>
            <div>
                <div>Я хочу получить:</div>
                <Input value={initState.whatIwantGet} placeholder="что хотите получить?" onChange={(value)=>setWhatIwantGet(value)}></Input>
            </div>
            <div>
                <div>Я хочу научится:</div>
                <Input value={initState.whatIwantLearn} placeholder="чему вы хотите научится?" onChange={(value)=>setWhatIwantLearn(value)}></Input>
            </div>
            <div onClick={()=>dispatch(setWhyPage(WhyPageState))}>
                <Link href="/registration/onBoarding" >Назад</Link>
                <Link href="/registration/onBoarding/2" >Вперед</Link>
            </div>
        </div>
    )
}
export default OnBoardingPage1
