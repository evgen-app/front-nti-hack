import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Button } from "../../../components/Button";
import styles from "../../../styles/onBoarding/onBoarding.module.css"

const OnBoardingPage: NextPage = () => {
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.h}>Сформмируйте <span className={styles.hc}>профиль</span></div>
            <div>Это поможет достигнуть цели!</div>
            <div className={styles.nextLink}>
                <Link href="/registration/onBoarding/1" className={styles.nextLink}>Дальше</Link>
            </div>
            <img src="/images/union.svg" className={styles.union}></img>
        </div>
    )
}


export default OnBoardingPage
