import React from 'react'
import styles from './footer.module.scss'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                ©2023 Visual Network Creatives. All rights reserved.
            </div>
            <div className={styles.socials}>
                <AiFillFacebook />
                <AiFillInstagram />
                <AiOutlineTwitter />
                <AiFillLinkedin />
            </div>
        </div>
    )
}

export default Footer