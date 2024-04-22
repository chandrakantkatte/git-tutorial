import React ,{useState} from 'react'
import Addition from "./Addititon";
const  Calculater=()=>
{
    const [numbers ,setNumbers]= useState('');
    const [numbers2 ,setNumbers2]= useState('');

const NewNumer=(event)=>
{
    setNumbers(event.target.value);
}
const NewNumer2=(event)=>
{
    setNumbers2(event.target.value);
}
const info={
    num1:numbers,
    num2:numbers2
}
    return(
        <>
    <h2>Enter the First Number </h2>
        <input type="number" id="first"  value={numbers}  onChange={NewNumer}></input>

    <h2>Enter the Second Number </h2>
        <input type="number" id="Second"  value={numbers2}  onChange={NewNumer2}></input>
        
        <Addition number={info}></Addition>

        
        </>
    );
}
export default Calculater;