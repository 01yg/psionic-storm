import { useEffect, useState } from 'react';
import styles from './Stocks.module.css'
import Stock from "./item/Stock";

export default function Stocks() {
  //const server = '20.212.153.248:8080';
  const server = 'localhost:8080';
  const [investings, setInvestings] = useState([]);

  useEffect(() => {
    console.log('useEffect start');
    const dispatchInvesting = () => {
      fetch(`http://${server}/investing/`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setInvestings(data);
        });
    }

    dispatchInvesting();
    const interval = setInterval(() => {
      dispatchInvesting();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if(investings.length === 0) {
    return <span>Loading...</span>
  }

  return (
    <>
      <div className={`${styles.menu}`}>
        <h2 className={`${styles.menuTitle}`}>
          <span className={`${styles.menuTitleSpan}`}>주식 리스트</span>
        </h2>
        <ul className={`${styles.stocks}`} >
          {investings.map(investing => (
            <Stock stock={investing} key={investing.stock} />
          ))}
        </ul>
      </div>
    </>
  );
}