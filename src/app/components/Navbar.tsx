"use client"
import { Moon, Sun } from "lucide-react"

import { useEffect, useState } from "react"
import Image from "next/image"

const ThemeToggle = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        setTheme(() => {
            return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
        })
        const rootElm = document.documentElement
        rootElm.setAttribute('class', theme)
    }, [theme])

    const toggleTheme = () => setTheme(theme => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', newTheme)
        return newTheme
    })

    const themeEml = (
        <section>
            <button onClick={toggleTheme}>
                {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
        </section>
    )

    return themeEml

}

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center dark:border-[#595b5e] px-4 py-3 border-b h-14">
            <div className="flex items-center">
                <Image width={28} height={28} src="./letter-v-square.svg" className="dark:invert size-7" alt="V svg image" title="Vishal Suryavanshi" />
                <span className="font-bold text-xl">ishal</span>
            </div>
            <ThemeToggle />
        </nav>
    )
}


export default Navbar;
