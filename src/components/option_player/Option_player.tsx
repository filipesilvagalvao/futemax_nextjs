"use client"
import { useState } from "react"
import styles from "./Option_player.module.css"

function Option_player({ channels }: { channels: string[] }) {
    const [option, setOption] = useState<string>(channels[0])

    return (
        <div className={styles.optionPlayer}>
            <iframe
                src={option}
                allow="encrypted-media"
                allowFullScreen
                className={styles.optionPlayer__iframe}
                scrolling="no"
            >
            </iframe>
            <div className={styles.optionPlayer__btn}>
                {
                    channels.map((channel, index) => (
                        <button key={channel} onClick={() => setOption(channel)}>OPÇÃO {index + 1}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Option_player