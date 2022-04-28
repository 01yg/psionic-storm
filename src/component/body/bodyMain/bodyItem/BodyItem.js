import styles from './BodyItem.module.css';

export default function BodyItem() {
  return (
    <>
      <div className={`${styles.item}`}>
        <div className={`${styles.title}`}>
          <h2 className={`${styles.h2}`}>
            <div className={`${styles.span}`}>
              Expression
            </div>
          </h2>
        </div>
        <div className={`${styles.body}`}>
          <div className={`${styles.bodyWrap}`}>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}