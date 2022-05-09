import styles from './BodyItem.module.css';
import Buy from './Buy';

export default function BodyItem() {
  return (
    <>
      <div className={`${styles.item}`}>
        <div className={`${styles.title}`}>
          <h2 className={`${styles.h2}`}>
            <div className={`${styles.span}`}>
              매수 추천
            </div>
          </h2>
        </div>
        <div className={`${styles.body}`}>
          <div className={`${styles.bodyWrap}`}>
            <Buy/><Buy/><Buy/>
            <Buy/><Buy/><Buy/>
            <Buy/><Buy/><Buy/>
          </div>
        </div>
      </div>
    </>
  );
}