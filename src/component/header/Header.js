import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={`${styles.header}`}>
        <h1>
          <a className={`${styles.logoA}`}>
            <span className={`${styles.logoEnterprise}`}>Young Infinity </span>
            <span className={`${styles.logoApp}`}> Psionic Storm</span>
            <span className={`${styles.logoRewriter}`}> young gyun</span>
          </a>
        </h1>
      </header>
    </>
  );
}