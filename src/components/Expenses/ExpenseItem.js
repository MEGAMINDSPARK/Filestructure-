import React,{useState} from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
const ExpenseItem = (props) => {

  const  [title,setTitle] = useState(props.title);

  const [amount,amFun] = useState(props.amount);


  const clickHandler = () => {
    
    setTitle('New Title...')
  
  }
  const amountFunc = ()=> {
    amFun('100$')
  }

<<<<<<< HEAD
  return (
    <Card className="expense-item">
=======
function ExpenseItem(props) {

  const clickHandler = ()=>{
    console.log("Clicked!!!!");
  }
  const deleteHandler = (e)=>{
    console.log("Deleted!!!!");
    e.target.parentNode.remove();
  }
  return (
    <Card className='expense-item'>
>>>>>>> 13b4dfd47a7dc33cb9aac538f5fce4c50c7a968c
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
<<<<<<< HEAD
=======
    {/* <button onClick= {()=>{console.log('clicked!')}} >Change Title</button> */}
    <button onClick= {clickHandler}>Change Title</button>
    
    <button onClick= {deleteHandler}>Delete</button>
    {/* i want to change props.title after cliking on button using props: on se start hota hai  */}
    </Card>

  );
}
>>>>>>> 13b4dfd47a7dc33cb9aac538f5fce4c50c7a968c

      <button onClick={amountFunc}>Change Expense</button>

      <button onClick={clickHandler}>Change Title</button> </Card>
  );
};
export default ExpenseItem;