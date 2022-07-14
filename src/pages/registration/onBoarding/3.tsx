import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setDrawDreamPage, drawDreamPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'

const OnBoardingPage3: NextPage = () => {
    let initState = useSelector((state: AppState)=>getFormState(state))[2] as drawDreamPageIE

    const [files, setFiles] = useState(initState.images)
    let dispatch = useDispatch()

    return(
        <div>
            <div>Нарисуй свои ассоциации со словом "мечта", подпиши каждый рисунок и приложи их ниже</div>
            <div>
                <div>Загрузить рисунки</div>
                <div>
                <input
                    onChange={(e)=>setFiles(e.target.files)}
                    type="file"
                    multiple={true}
                />
                </div>
            </div>
            <div onClick={()=>dispatch(setDrawDreamPage({images:files}))}>
                    <Link href="/registration/onBoarding/2">Назад</Link>
                    <Link href="/registration/onBoarding/4">Вперед</Link>
            </div>
        </div>
    )

}

export default OnBoardingPage3