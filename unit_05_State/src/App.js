import './App.css';
import React from 'react';
import { useState } from 'react';



function App() {
 let elem1= React.createRef();
 const [st1, setSt1] = useState();
 const [st2, setSt2] = useState(0);
 const [st3, setSt3] = useState();
 const [st4, setSt4] = useState(0);
 const [st5, setSt5] = useState();
 const [st6, setSt6] = useState();
 const [st7, setSt7] = useState();
 let elem7= React.createRef();
 const [st8, setSt8] = useState('');
 const [st9, setSt9] = useState();
 const [st10, setSt10] = useState();
 let elem10= React.createRef('');


  function task1() {
    let out1 = st1;
    out1 = elem1.current.value;
    console.log(out1);
    setSt1(out1);
  }
  function task2() {
    let count = st2;
    count++;
    setSt2(count);
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    let count = st4;
    count++;
    setSt4(count);
  }
  function task5(event) {
    let tik = st5;
    if(event.target.checked){
    tik = event.target.value;
    setSt5(tik);
  } else {
    setSt5(0);
  }
}
  function task6(event) {
      let value = st6;
      value = event.target.value;
      setSt6(value);
  }
  function task7() {
    let randomCol = () => {
      let num = (min=0, max=250) => Math.round(Math.random()*(max+1));
      return `rgb(${num()},${num()},${num()})`;
    }

    let color = st7;
    color = randomCol();
      elem7.current.style.backgroundColor = color; 
      setSt7(color);
  }

    
  function task8(event) {
    let out = "";
    out = st8;
    console.log(event.key);
    if(isNaN(event.key)){
      out += "0";
    } else {
      out += "1";
    }
    console.log(out);
    setSt8(out);
    
  }

  function task9(event) {
    let out = st9;
    out = event.target.value;
    setSt9(out);
  }
  function task10() {
    let out = st10;
    out = elem10.current.value;
    setSt10(out);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text" ref={elem1}/>
        <button className="task-1" onClick={task1} >Push</button>
        <div>{st1}</div>
      </section>
       <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
     <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
       <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55"  onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={elem7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={elem10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;