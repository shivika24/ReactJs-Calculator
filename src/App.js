import React,{useState,useRef,useEffect} from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(()=>inputRef.current.focus());//like component didmount focus the input field when component renders
  function handleClick(e){
    setResult(result+e.target.name);  
  }
  function onClear()
  {
    setResult("");
  }
  function backspace()
  {
    setResult(result.slice(0,result.length-1))
  }
  function calculate()
  {
    try{
      setResult(eval(result)+"");
    }
    catch(err)
    {
      setResult("Error")
    }
  }
  return (
    <div id="box-3" style={{backgroundImage: "url(https://image.freepik.com/free-vector/math-background_23-2148146270.jpg)",padding: "50px"}}><br/><br/><br/><br/>
      
      <center><div id="featured-models" style={{width:"30%"}}>
      <center>
      
        <h1>Calculator</h1>
     
      <div className="row"  style={{padding:0,margin:0,width:"90%",height:"40px"}}>
        <input type="text" style={{width:"100%",height:"40px",height:"100%"}} ref={inputRef} value={result}/>
      </div>
      <div className="row" style={{padding:0,margin:0,width:"90%",height:"40px"}}>
        <div className="col-md-6" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} onClick={onClear}>Clear</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}} onClick={backspace}>
        <button className="btn1" style={{width:"100%",height:"40px"}}>C</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn2" style={{width:"100%",height:"40px"}} name="+" onClick={handleClick}>+</button>
        </div>
      </div>
      <div className="row" style={{padding:0,margin:0,width:"90%",height:"40px"}}>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="7" onClick={handleClick}>7</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="8" onClick={handleClick}>8</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn1" style={{width:"100%",height:"40px"}} name="9" onClick={handleClick}>9</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn2" style={{width:"100%",height:"40px"}} name="-" onClick={handleClick}>-</button>
        </div>
      </div> 
      <div className="row" style={{padding:0,margin:0,width:"90%",height:"40px"}}>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="4" onClick={handleClick}>4</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="5" onClick={handleClick}>5</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn1" style={{width:"100%",height:"40px"}} name="6" onClick={handleClick}>6</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn2" style={{width:"100%",height:"40px"}} name="*" onClick={handleClick}>*</button>
        </div>
      </div>   
      <div className="row" style={{padding:0,margin:0,width:"90%",height:"40px"}}>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="1" onClick={handleClick}>1</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="2" onClick={handleClick}>2</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn1" style={{width:"100%",height:"40px"}} name="3" onClick={handleClick}>3</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn2" style={{width:"100%",height:"40px"}} name="/" onClick={handleClick}>/</button>
        </div>
      </div>    
      <div className="row" style={{padding:0,margin:0,width:"90%",height:"40px"}}>
        <div className="col-md-3" style={{padding:0,margin:0}}>
          <button className="btn1" style={{width:"100%",height:"40px"}} name="0" onClick={handleClick}>0</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn1" style={{width:"100%",height:"40px"}} name="." onClick={handleClick}>.</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn1" style={{width:"100%",height:"40px"}} name="%" onClick={handleClick}>%</button>
        </div>
        <div className="col-md-3" style={{padding:0,margin:0}}>
        <button className="btn2" style={{width:"100%",height:"40px"}} onClick={calculate}>=</button>
        </div>
      </div> 
      </center>
      </div>
      </center>
    </div>
    
  );
}

export default App;
