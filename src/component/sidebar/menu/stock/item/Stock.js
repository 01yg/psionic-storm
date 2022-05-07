import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './Stock.module.css'
import { set } from "../../../../../store/stock";

export default function Stock({ stock: s }) {
  const [stock, setStock] = useState(s);
  const [img, setImg] = `https://t1.daumcdn.net/finance/chart/kr/daumcandle/g/A${stock.isuCd}.png`;
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
          <div className={`${styles.stockTitle} ${stock.stock == selectStock.value.stock ? styles.stockTitleActive : ''}`}>
            <div className={`${styles.stockText}`}>
              {stock.stock}
            </div>
            <div className={`${styles.stockScore}`}>
              점수 {stock.score}
            </div>
          </div>

          <div className={`${styles.stockPrice} ${stock.stock == selectStock.value.stock ? styles.stockTitleActive : ''}`}>
            <div className={`${styles.stockText}`}>
              현재가 {stock.current}
            </div>
            <div className={`${styles.stockScore}`}>
              변동율 {(stock.changeRate-100).toFixed(2)}%
            </div>
          </div>

          <div>
            <img className={`${styles.stockImg}`} src={`https://t1.daumcdn.net/finance/chart/kr/daumcandle/g/A${stock.isuCd}.png`}/>
          </div>
        </div>
      </li>
    </>
  );
}