import React from 'react'
import Head from 'next/head'
import { getPrefectures } from './api/getPrefectures'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>yarn dev test</h1>
        <button onClick={() => getPrefectures()}>都道府県呼び出し</button>
      </div>
    </>
  )
}

export default Home
