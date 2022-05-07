import styles from './BodySide.module.css'
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import SideItem from './sideItem/SideItem';

export default function BodySide() {
  const stock = useSelector((state) => state.stock);

  return (
    <>
      <div className={`${styles.bodySide}`}>
        <SideItem>
          <img src="https://t1.daumcdn.net/finance/chart/kr/daumstock/d/A006740.png?t=202205070945" />
        </SideItem>
        <SideItem />
        <SideItem />
      </div>
    </>
  );
}