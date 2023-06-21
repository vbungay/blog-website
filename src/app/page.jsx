import Image from 'next/image'
import styles from './page.module.scss'
import Hero from "public/hero.png";
import { BsArrowUpRight } from 'react-icons/bs'

export default function Home() {
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
          <p>Get in touch</p>
          <BsArrowUpRight />
        </div>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
