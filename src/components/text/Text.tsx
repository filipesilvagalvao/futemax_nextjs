import styles from "./Text.module.css"

function Text({paragraphs}:{paragraphs:string[]}) {
    return (
        <div className={styles.paragraphs__container}>
            {
                paragraphs.map((text)=>(
                    <p key={text}>{text}</p>
                ))
            }
        </div>
    )
}

export default Text