import styles from './Footer.module.css'
function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
        <p>&copy; FuteMax {currentYear} - Alguns direitos reservados </p>
    </footer>
  )
}

export default Footer