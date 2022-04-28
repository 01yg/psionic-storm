import styles from './BodyMain.module.css';
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';

import BodyItem from './bodyItem/BodyItem';

export default function BodyMain() {
  const stock = useSelector((state) => state.stock);

  return (
    <>
      <div className={`${styles.contentMain}`}>
        <BodyItem />
        <div className={`${styles.contentMainBottom}`}>
          <div className={`${styles.contentMainBottomWrap}`}>
            <div className={`${styles.contentMainBottomWrap2}`}>
              <div className={`${styles.contentMainBottomWrapTitle}`}>
                TEST STRING
              </div>
              <div className={`${styles.contentMainBottomWrapContent}`}>
                <div className={`${styles.contentMainBottomWrapContentWrap}`}>
                  <Card className={`${styles.card}`}>{stock.value.stock}</Card>
                  <Card className={`${styles.card}`}>{stock.value.current}</Card>
                  <Card className={`${styles.card}`}>{stock.value.high}</Card>
                  <Card className={`${styles.card}`}>{stock.value.low}</Card>
                  <Card className={`${styles.card}`}>{stock.value.changePrice}</Card>
                  <Card className={`${styles.card}`}>{stock.value.changeRate}</Card>
                  <Card className={`${styles.card}`}>{stock.value.tradingVolume}</Card>
                  <Card className={`${styles.card}`}>{stock.value.tradingTime}</Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}