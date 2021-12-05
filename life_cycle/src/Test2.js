import React, {useState} from "react";



function Test2(){
  console.log("set state");

  const[s1, setS1] = useState(0);

  const buttonHandler = () => {
    let val = s1;
      val++;
      setS1(val);
      console.log("handler");
    
  }


  console.log("rendor 1");
  return (
    <>
    {console.log("rendor 2")};
    <div>
        <button onClick = {buttonHandler}>Push</button>
      </div>
      <div>
        {s1}
      </div>
    </>
  )
}



export default Test2;