import { NextPage } from "next";
import Link from "next/link";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormState, setWhatILikePage, superPowerPageIE, whatILikePageIE, whoIPageIE, whyPageIE } from "../../../app/user/onBoardingSlice";
import { AppState } from '../../../app/store'
import { Input } from "../../../components/Input";
import styles from "../../../styles/onBoarding/onBoarding.module.css"
import useArray from 'react-use-array'

const lastPage: NextPage = () => {
    let formState = useSelector((state: AppState)=>getFormState(state))
    let you = formState[3] as whoIPageIE
    let why = formState[0] as whyPageIE
    let things = formState[4] as whatILikePageIE
    let BadSkills = ["Надо всегда совершенствовать свои навыки, не забывай про это"]
    let superPowers = formState[1] as superPowerPageIE
    if (superPowers.communication <= 3 && superPowers.communication > 0){
        BadSkills.push("Усовершенствуй навыки коммуникации, больше разговаривай с людьми, заведи новых друзей, помни - знакомства это всегда классно.")
    }
    if (superPowers.creative <= 3 && superPowers.creative > 0){
        BadSkills.push("Мы советуем не забывать также про книжки, ведь они классно развивают воображение и заставляют креативить.")
    }
    if (superPowers.coordination <= 3 && superPowers.communication > 0){
        BadSkills.push("Помни, что организованность это важно. Начинать надо с себя, поставь к примеру себе как цель заправлять каждый день постель и содержать комнату в порядке.")
    }
    if (superPowers.generateIdeas <= 3 && superPowers.generateIdeas > 0){
        BadSkills.push("Мозговой шторм - неплохой способ развивать способность генерировать, поиграй с друзьями в настольные игры ТРИЗ и прокачайся еще больше")
    }
    if (superPowers.searchResources <= 3 && superPowers.searchResources > 0){
        BadSkills.push("Поисковые системы, такие как яндекс - твой лучший друг на все времена. Научись составлять свои запросы в совершенстве и заметишь как большое количество проблем исчезнут из твоей жизни")
    }
    if (superPowers.leaders <= 3 && superPowers.leaders > 0){
        BadSkills.push("Лидерские качества сейчас нужны всем! Советуем их разивать, для этого отлично подходят встречи с вдохновителями.")
    }

    return(
        <div>
            <div>Спасибо что заполнили форму!</div>
            <div>
                Вы прошли главный и один из самых главных шагов к успеху, 
                этот небольшой самоанализ поможет вам сформировать первые цели.
            </div>
            <div>
                <div>Мы подготовили для тебя пару полезных советов:</div>
                <ul>
                    {
                        BadSkills.map((skill)=><li>{skill}</li>)
                    }
                </ul>
            </div>
            <div>
                <div>Мы рады что ты движешься в нужном направлении и уже определился со многими факторами</div>
                <div>{why.whatIwantGet == ""? null:("Ты хочешь получить: " + why.whatIwantGet)}</div>
                <div>{why.whatIwantKnown == ""? null:("Ты хочешь узнать: " + why.whatIwantGet)}</div>
                <div>{why.whatIwantLearn == ""? null:("Ты хочешь научится: " + why.whatIwantGet)}</div>
            </div>
            <div>
                <div>Ты очень классный, ведь у тебя есть все качества, чтобы достичь твоих целей и исполнить все твои мечты.</div>
                <div>{you.individualist == null? null: 
                ("Ведь ты:" +  you.individualist? "индивидуалист":"командный игрок" + ", "
                    + you.introvert? "интроверт":"экстроверт" + ", "
                    + you.leader? "лидер": "исполнитель" + ", "
                    + you.optimist? "оптимист": "пессимист"  + ", "
                    + you.organize? "организованный":"творческий" + ", "
                    + you.serious? "серьезный":"легкомысленный" + ", "
                )}</div>
                <div>Надо держать грань между всеми качествами, нельзя быть во всех ситуациях серьезным, также как и нельзя быть всегда легкомысленным, надо все делать в меру.</div>
                <div>
                    <div>Незабывай про вещи, что ты обещал нам сделать:</div>
                    <ul>
                        {   
                            things.things.length>0?  things.things.map((value)=><li>{value}</li>):null
                        }
                    </ul>
                </div>
            </div>
            <div>Мы уверены, все твои цели и мечты сбудуться, если следовать четкому плану</div>
            <div className={styles.nextLink}>
                <Link href="/" className={styles.nextLink}>Далее</Link>
            </div>
        </div>
    )
}
export default lastPage