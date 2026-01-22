import Link from "next/link"
import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.desc}>A página que você está procurando não existe ou foi removida.</p>
        <Link href="/" className={styles.homeLink}>Voltar para a Home</Link>
      </div>
    </main>
  )
}
