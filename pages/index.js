/*
 * @Author: Chris
 * @Date: 2020-12-18 00:23:28
 * @LastEditors: Chris
 * @LastEditTime: 2020-12-19 16:05:26
 * @Descripttion: **
 */
import Head from 'next/head'
import {Button, Radio, Select} from 'antd'
import styles from '../styles/Home.less'
import styles1 from '../styles/home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Index</h1>
      <Button type='primary'>按钮</Button>
      <Button type='primary' ghost>按钮</Button>
      <Button type='link'>按钮</Button>
      <Button type='primary'>按钮</Button>
      <Radio />按钮
      <Select style={{width: 200}}>
        <Select.Option value={1}>呵呵呵</Select.Option>
        <Select.Option value={2}>哈哈哈哈</Select.Option>
      </Select>
      <p className={styles1.test}>这是一段文字</p>
    </div>
  )
}
