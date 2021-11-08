import logo from './logo.svg';
import './App.css';

let text = 'test variable';
const style = {
  fontSize: '24px',
  fontStyle : 'italic',
  color: 'red'
};

function App() {
  let text2 = '222';
  return (
    <>
<div  className="container">
<h1 style={style}>app_1</h1>
<img src="/images/1.webp" alt="cat"/>
</div>
<ul>
<li>Hello</li>
<li>{text+text2}</li>
</ul>  
	</>
  );
}

export default App;
