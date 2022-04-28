import styles from './Menu.module.css'
import Stocks from './stock/Stocks';

export default function Menu() {
  return (
    <>
      <div className={`${styles.menu}`}>
        <Stocks />
      </div>
    </>
  );
}