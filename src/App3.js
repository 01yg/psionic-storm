import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import Body from './component/body/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import app from './App.css'
import styles from './App.module.css'

function App3() {
  return (
    <BrowserRouter>
      <div className={`${styles.app3}`}>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Body />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App3;