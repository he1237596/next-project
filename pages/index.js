/*
 * @Author: Chris
 * @Date: 2020-12-18 00:23:28
 * @LastEditors: Chris
 * @LastEditTime: 2020-12-19 16:55:32
 * @Descripttion: **
 */
import Head from 'next/head'
import {Button} from 'antd'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Index</h1>
      <Button type='primary'>按钮</Button>
      <Button type='primary'>按钮</Button>
      <Button type='primary'>按钮</Button>
      <Button type='primary'>按钮</Button>
      <p>这是一段文字</p>
      <div className={styles.test}>dddddddddd</div>
    </div>
  )
}
