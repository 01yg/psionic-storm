import styles from './Body.module.css';
import BodySide from './bodySide/BodySide';
import BodyMain from './bodyMain/BodyMain';

export default function Body() {
  return (
    <>
      <div className={`${styles.content}`}>
        <div className={`${styles.stocks}`}>
          <BodySide />
          <BodyMain />
        </div>
      </div>
    </>
  );
}