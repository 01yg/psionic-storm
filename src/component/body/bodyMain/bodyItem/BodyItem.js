import styles from './BodyItem.module.css';
import Buy from './Buy';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

export default function BodyItem() {
  const [topStocks, setTopStocks] = useState([]);
  const stocks = useSelector((state) => state.stocks);

  useEffect(() => {
    setTopStocks(stocks.value.filter((stock) => {
      return stock.score === 1075;
    }));
  },[]);

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
            {topStocks.map(stock => (
              <Buy stock={stock}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}