import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let elem2 = React.createRef();
  let elem5 = React.createRef();
  let elem7 = React.createRef();
  let elem8 = React.createRef();
  let elem10 = React.createRef();
  const [output, setOutput] = useState();
  

  function task1() {
    console.log("task2")

  }
  function task2() {
    elem2.current.classList.add("active");
  }
  function task3(event) {
      console.log(event.target.value)
  }
  function task4(event) {
    if(event) count4++;
    console.log(count4);
  }
 
  function task5(event) {
      if(event.target.checked){
      setOutput(elem5.current.value);
    } else {
      setOutput("0");
    }
  }
  function task6(event) {
      console.log(event.target.value);
      setOutput(event.target.value);

  }
  function task7() {
    function randomCol (){
      let num = (min=0, max=250) => Math.round(Math.random()*(max+1));
      return `rgb(${num()},${num()},${num()})`;
    }
    
    elem7.current.style.backgroundColor = randomCol();
  }


  let out = "";
  function task8() {
    let str = elem8.current.value;
    let sumLast = str[str.length - 1];
      if(isNaN(sumLast)){
      out += "1";
      setOutput(out);
    } else {
      out += "0";
      setOutput(out);
    }
  }

  function task9(event) {
    setOutput(event.target.value)
  }


  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+elem10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" ref = {elem2} onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput = {task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick ={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" ref={elem5} onChange={task5} />
        <div className="out-5">{output}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6"  onChange={task6} >
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={elem7} ></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={elem8}></input>
        <div className="out-8">{output}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{output}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={elem10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
