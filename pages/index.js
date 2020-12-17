/*
 * @Author: Chris
 * @Date: 2020-12-18 00:23:28
 * @LastEditors: Chris
 * @LastEditTime: 2020-12-18 00:25:29
 * @Descripttion: **
 */
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Index</h1>
    </div>
  )
}
