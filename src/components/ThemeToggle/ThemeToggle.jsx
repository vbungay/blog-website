"use client"

import React, { useContext } from "react";
import styles from "./theme.module.scss";
/* import { ThemeContext } from "../../context/ThemeContext"; */
import { ThemeContext } from "../../context/ThemeContext";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs"

const ThemeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}><BsFillSunFill /></div>
            <div className={styles.icon}><BsMoonFill /></div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
            />
        </div>
    )
}

export default ThemeToggle