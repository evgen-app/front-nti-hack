import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Button } from "../../../components/Button";

const OnBoardingPage: NextPage = () => {
    return(
        <div>
            <div>Сформмируй профиль</div>
            <Link href="/registration/onBoarding/1">Дальше</Link>
        </div>
    )
}


export default OnBoardingPage
