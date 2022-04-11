import { useState } from 'react';
import World from './World';
import styles from './Hello.module.css';
import UserName from './UserName';

export default function Hello(props) {
  const [name, setName] = useState('Mike');
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? '성인 입니다.' : '미성년자 입니다.';

  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
    console.log(txt);
  }
  function changeName() {
    setName(name === 'Mike' ? 'Jane' : 'Mike');
  }

  return (
    <div>
      <h1>state</h1>
      <h2>
        <UserName name={name} />
        ({age}세) : {msg}
      </h2>
      <button onClick={changeName}>Change</button>
      <button onClick={() => setAge(age-1)}>-age</button>
      <button onClick={() => setAge(age+1)}>+age</button>
      <h1 style={{
          color: '#f00',
          borderRight: '2px solid #000',
          marginBottom: '30px',
          opacity: 0.5,
      }}>Hello</h1>
      <World/>
      <World/>
      <div className={styles.box}>Hello</div>
      <button onClick={showName}>Show name</button>
      <button onClick={
        () => showAge(10)
      }>Show age</button>
      <input type="text" onChange={(e) => {
        const txt = e.target.value
        showText(txt);
      }} />
    </div>
  )
}