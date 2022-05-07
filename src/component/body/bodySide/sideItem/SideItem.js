import styles from './SideItem.module.css'
import { useSelector } from "react-redux";
import { Card } from 'react-bootstrap';

export default function SideItem({children}) {
  const stock = useSelector((state) => state.stock);

  return (
    <>
      <div className={`${styles.item}`}>
        <button className={`${styles.title}`}>
          <h2 className={`${styles.titleH2}`}>
            <span className={`${styles.titleH2Span}`}>
              Explanation
            </span>
            <div className={`${styles.titleSvg}`}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                </g>
              </svg>
            </div>
          </h2>
        </button>
        <div className={`${styles.body}`}>
          <div className={`${styles.wrap}`}>
            <div className={`${styles.content}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}