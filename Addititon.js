
import React ,{useState} from "react";
function Addition(props)
{
   let sum= props.number
   const number1=sum.num1;
   const number2=sum.num2;
   const[add , setAdd]=useState('');
   let Add=(e)=>
   {
    e.preventDefault();
    let sumes=number1*number2;
    setAdd(sumes);
   }
    return(
        <>
      <form onSubmit={Add}>
        <h2>{add}</h2>
      <button type="submit" >Addititon</button>
      </form>

        </>
    );
}
export default Addition;