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
                <AiFillFacebook className={styles.socialFb} />
                <AiFillInstagram className={styles.socialIg} />
                <AiOutlineTwitter className={styles.socialTw} />
                <AiFillLinkedin className={styles.socialLi} />
            </div>
        </div>
    )
}

export default Footer