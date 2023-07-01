// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
//
// const inter = Inter({ subsets: ['latin'] })

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello Next World!</h1>
        <ul>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/clients">Clients</Link></li>
          <li><a href="/portfolio">Portfolio - Anchor Tag</a></li>
        </ul>
      </div>
    </>
  )
}
