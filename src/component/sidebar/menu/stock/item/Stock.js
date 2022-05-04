import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './Stock.module.css'
import { set } from "../../../../../store/stock";

export default function Stock({ stock: s }) {
  const [stock, setStock] = useState(s);
  const dispatch = useDispatch();

  const selectStock = useSelector((state) => state.stock);

  function onClickStock(investing) {
    dispatch(set(investing));
  }

  return (
    <>
      <li
        className={`${styles.stockLi}`}
        onClick={() => onClickStock(stock)}
      >
        <div className={`${styles.stockRow} ${stock.stock == selectStock.value.stock ? styles.stockRowActive : ''}`}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={`${styles.stockSvg}`} height="14" width="14" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></g></svg>
          <div className={`${styles.stockTitle} ${stock.stock == selectStock.value.stock ? styles.stockTitleActive : ''}`}>
            <div className={`${styles.stockText}`}>
              {stock.stock}
            </div>
            <div className={`${styles.stockScore}`}>
              {stock.score}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}