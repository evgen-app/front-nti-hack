import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { EventIE, EventTypes } from '../app/types'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { EventComponent } from '../components/EventComponent'
import { Input } from '../components/Input'

import styles from '../styles/Home.module.css'

const mockData = [
  {
    date: new Date(2005, 11, 3),
    name:"очень важная цель",
    description: "очень большое и крутое описание",
    type: EventTypes.AIM
  } as EventIE,
  {
    date: new Date(2006, 1, 10),
    name: "Комментарий для лоха",
    description: "ты лошара тупая",
    isModerated: true,
    type: EventTypes.COMMENT
  } as EventIE
]


const IndexPage: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        
      </div>
    </div>
  )
}

export default IndexPage
