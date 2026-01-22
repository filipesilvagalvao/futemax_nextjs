import styles from "./Titleh1.module.css"

function Titleh1({text}:{text:string}) {
  return (
    <h1 className={styles.titleh1}>{text}</h1>
  )
}

export default Titleh1