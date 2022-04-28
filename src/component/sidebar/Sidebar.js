import styles from './Sidebar.module.css'

import Nav from './nav/Nav';
import Menu from './menu/Menu';

export default function Sidebar() {
  return (
    <>
      <div className={`${styles.sidebar}`}>
        <div className={`${styles.sidebarHeader}`}>
          <Nav />
          <Menu />
        </div>
        <div className={`${styles.sidebarBottom}`}>
        </div>
      </div>
    </>
  );
}