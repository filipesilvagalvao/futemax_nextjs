import styles from './Warp.module.css';

function Warp() {
    return (
        <div className={styles.warp}>
            <p className={styles.warp__text}>⚠️ Player ou site <span className={styles.warp__italic}>fora do ar?</span> <a href="https://one.one.one.one/" target='_blank' rel="noopener noreferrer" className={styles.warp__emphasys}>Baixe a VPN</a>:
                <a
                    href="https://one.one.one.one/"
                    target='_blank'
                    rel="noopener noreferrer"
                    className={styles.warp__link}
                >
                    <img src="/warp.png" alt="" />
                </a>
            </p>
        </div>
    )
}

export default Warp