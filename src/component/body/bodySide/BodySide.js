import styles from './BodySide.module.css'
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';
import SideItem from './sideItem/SideItem';

export default function BodySide() {
  const stock = useSelector((state) => state.stock);

  return (
    <>
      <div className={`${styles.bodySide}`}>
        <SideItem />
        <SideItem />
        <SideItem />
      </div>
    </>
  );
}