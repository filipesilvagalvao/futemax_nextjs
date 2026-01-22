"use client"
import { FormEvent, useState } from "react"
import styles from "./Search_bar.module.css"
import { useRouter } from "next/navigation"

function Search_bar() {

    const [query, setQuery] = useState("")
    const router = useRouter()

    const search = (e: FormEvent) => {
        e.preventDefault()

        if (!query.trim()) return

        router.push(`/pesquisar?q=${encodeURIComponent(query)}`)

        setQuery("")
    }

    return (
        <>
            <input type="checkbox" id="search-toggle" className={styles.search__toggle} />
            <label htmlFor="search-toggle" className={styles.search__open}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </label>

            <search className={styles.header__search}>

                <form className={styles.header__searchForm} onSubmit={search}>

                    <button type="submit" className={styles.header__searchBtn}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <input type="search" name="" id="" placeholder="Buscar..." className={styles.header__searchInput} value={query} onChange={(e) => setQuery(e.target.value)} />

                </form>

            </search>
        </>
    )
}

export default Search_bar