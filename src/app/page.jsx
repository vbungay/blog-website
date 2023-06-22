"use client"

import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image'
import styles from './page.module.scss'
import { ThemeContext } from '@/context/ThemeContext';
import Hero from "public/hero.png";
import HeroAlt from "public/heroAlt.png";
import { BsArrowUpRight } from 'react-icons/bs'

const HeroLight = dynamic(() => import('../../public/hero.png'));
const HeroDark = dynamic(() => import('../../public/heroAlt.png'));

export default function Home() {
  const { mode } = useContext(ThemeContext);

  const heroImage = mode === 'light' ? Hero : HeroAlt;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Visual Network Creatives
        </h1>
        <p className={styles.desc}>
          Embrace the power of visual connectivity, let us transform your online presence into a captivating network of creativity, functionality, and success!
        </p>
        <div className={styles.cta}>
          <a href="/contact" className={styles.link}>
            <p url="/contact">Get in touch</p>
            <BsArrowUpRight />
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={heroImage} alt="" className={styles.img} />
      </div>
    </div>
  )
}
