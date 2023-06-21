"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.scss'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

//array of navigation links
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                vnc
            </Link>
            <div className={styles.links}>
                <ThemeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                <button
                    className={styles.btn}
                    onClick={() => {
                        console.log("logged out")
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar