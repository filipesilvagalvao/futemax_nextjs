import Link from "next/link"
import styles from "./Header.module.css"
import Search_bar from "./search_bar/Search_bar"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>

                <input type="checkbox" id="menu-toggle" className={styles.header__checkbox} />
                <label htmlFor="menu-toggle" className={styles.header__hamburguer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <Link href="/"><i className="fa-regular fa-house"></i> Home</Link>
                    <Link href="/todos-os-canais"><i className="fa-solid fa-tv"></i> Canais de TV</Link>
                    <Link href="https://videocinix.com/" target="blank_"><i className="fa-solid fa-clapperboard"></i> Filmes e Séries</Link>
                </nav>

                <div className={styles.header__logo}>
                    <Link href="/">
                        <img src="/logo/futemax.webp" alt="logo futemax" />
                    </Link>
                </div>

                <Search_bar/>

            </div>
        </header>
    )
}

export default Header