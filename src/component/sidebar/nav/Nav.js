import styles from './Nav.module.css'

export default function Nav() {
  return (
    <>
      <nav className={`${styles.sidebarHeaderIcon}`} >
        <a className={`${styles.sidebarHeaderIconA}`} >
          <span className={`${styles.sidebarHeaderIconA}`}></span>
          <svg className={`${styles.sidebarHeaderIconSvg}`}
            stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></g></svg>
        </a>
        <a className={`${styles.sidebarHeaderIconA}`} >
        </a>
        <a className={`${styles.sidebarHeaderIconA}`} >
        </a>
        <a className={`${styles.sidebarHeaderIconA}`} >
        </a>
      </nav>
    </>
  );
}