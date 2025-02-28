import { useState } from "react";
import "./App.css";

function App() {
  const[weight, setWeight] = useState();
  const[height, setHeight] = useState();
  const[bmi, setBmi] = useState("");
  const[result, setResult] = useState(""); 

  let calBmi = (e)=>{
    e.preventDefault();
    if(weight ===0 || height ===0){
      alert("Please enter your weight and height");
    }else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1));

    //   if (bmi < 18.5) {
    //     result = 'Underweight';
    // } else if (bmi >= 18.5 && bmi <= 24.9) {
    //     result = 'Healthy';
    // } else if (bmi >= 25 && bmi <= 29.9) {
    //     result = 'Overweight';
    // } else if (bmi >= 30 && bmi <= 34.9) {
    //     result = 'Obese';
    // } else if (bmi >= 35) {
    //     result = 'Extremely obese';
    // }

      if(bmi < 18.5){
        setResult("You are Underweight");
      }else if(bmi >= 18.5 && bmi <= 24.9){
        setResult("You are Healthy");
      }else if(bmi >= 25 && bmi <= 29.9){
        setResult("You are Healthy");
      } else if (bmi >= 30 && bmi <= 34.9) {
        setResult( 'Obese');
      }else if(bmi >= 35){
        setResult("Extremely obese");
      }

    }    
  }
  
  let reload = ()=>{
    window.location.reload();
  }


  return (  
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>

        <form onSubmit={calBmi}>
          <div className="weight">
            <label>Weight (ibs):</label>
            <input type="number"
                   min="0" 
                   placeholder="Enter the Weight(ibs)"
                   value={weight} 
                   onChange={(e)=> setWeight(e.target.value)}/>
          </div>

          <div className="weight">
            <label>Height (in):</label>
            <input type="number" 
                   min="0" 
                   placeholder="Enter the Height(in)" 
                   value={height} 
                   onChange={(e)=> setHeight(e.target.value)}/>
          </div>

          <div className="btn">
            <button className="sub" type="submit" >Submit</button>
            <button className="sub" type="submit" onClick={reload} >Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi} </h3>
            <p>-- {result} --</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
