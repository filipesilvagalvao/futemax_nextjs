import styles from "./Titleh2.module.css"
function Titleh2({text}:{text:string}) {
  return (
    <h2 className={styles.titleh2}>{text}</h2>
  )
}

export default Titleh2