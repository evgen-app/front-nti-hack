import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setDrawDreamPage, drawDreamPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'
import styles from "../../../styles/onBoarding/onBoarding.module.css"

const OnBoardingPage3: NextPage = () => {
    let initState = useSelector((state: AppState)=>getFormState(state))[2] as drawDreamPageIE

    const [files, setFiles] = useState(initState.images)
    let dispatch = useDispatch()

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.h}><span className={styles.hc}>Нарисуй</span> свои <br></br>
                <span className={styles.hc}>ассоциации</span> со <br></br>
                словом "мечта"
            </div>
            <div>Подпиши каждый и приложи и прикрепи ниже</div>
            <div>
                <div>
                <input
                    onChange={(e)=>setFiles(e.target.files)}
                    type="file"
                    multiple={true}
                    className={styles.inpFile}
                />
                </div>
            </div>
            <div className={styles.linkWrapper} onClick={()=>dispatch(setDrawDreamPage({images:files}))}>
                    <div className={styles.backLink}>
                        <Link href="/registration/onBoarding/2">Назад</Link>

                    </div>
                    <div className={styles.nextLink}>
                        <Link href="/registration/onBoarding/4" className={styles.nextLink}>Вперед</Link>
                    </div>

            </div>
        </div>
    )

}

export default OnBoardingPage3