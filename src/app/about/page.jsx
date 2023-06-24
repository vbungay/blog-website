import React from 'react'
import Image from 'next/image'
import styles from './page.module.scss'
import aboutImg from '../../../public/aboutImg.jpg'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={aboutImg} fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Visual Network Creatives
          </h1>
          <h2 className={styles.imgSub}>
            Where Vision Meets Connection
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are</h1>
          <p className={styles.desc}>
            Welcome to Visual Network Creatives, where creativity meets connectivity! We are a dynamic web design brand dedicated
            to crafting visually stunning and highly functional digital experiences that leave a lasting impact on your audience.
            <br />
            <br />
            At Visual Network Creatives, we believe that a successful website goes beyond aesthetics. It should be intuitive,
            user-friendly, and optimized for performance. We leverage the latest web technologies and industry best practices to
            create fast-loading, SEO-friendly websites that engage users and drive conversions. Whether you need an e-commerce site,
            a corporate portfolio, or a cutting-edge web application, we have the expertise to bring your vision to life.
            <br />
            <br />
            We take pride in our commitment to client satisfaction and believe in building long-term partnerships. Throughout the design 
            process, we maintain open lines of communication, ensuring that your input and feedback are incorporated at every stage.
            <br />
            <br />
            Embrace the power of visual connectivity with Visual Network Creatives. Let us transform your online presence into a 
            captivating network of creativity, functionality, and success. Contact us today to embark on a journey towards a 
            visually stunning digital future!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.desc}>
              1. Custom Web Design: We create visually stunning websites that reflect your brand's personality, ensuring a captivating 
              online presence that sets you apart from the competition.
              <br />
              <br />
              2. Responsive Web Development: We build websites that adapt seamlessly to different devices and screen sizes, providing an 
              optimal user experience across desktops, tablets, and mobile devices.
              <br />
              <br />
              3. Search Engine Optimization (SEO): We optimize your website's structure, content, and performance to improve visibility 
              on search engines, driving organic traffic and boosting your online presence.
              <br />
              <br />
              4. Social Media Integration: We seamlessly integrate your website with various social media platforms, enabling easy sharing, 
              engagement, and amplification of your brand across social channels.
              <br />
              <br />
              5. Web Maintenance and Support: We provide ongoing website maintenance and support services, ensuring your website remains secure, 
              up-to-date, and optimized for performance.
          </p>
          <Button url="/contact" text="Request a quote" />
        </div>
      </div>
    </div>
  )
}

export default About