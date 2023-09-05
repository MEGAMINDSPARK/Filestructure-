// import React,{useState} from "react";
// import "./ExpenseItem.css";
// import Card from "../UI/Card";
// import ExpenseDate from "./ExpenseDate";

// import "./ExpenseItem.css";
// const ExpenseItem = (props) => {

//   const  [title,setTitle] = useState(props.title);

//   const [amount,amFun] = useState(props.amount);


//   const clickHandler = () => {
    
//     setTitle('New Title...')
  
//   }
//   const amountFunc = ()=> {
//     amFun('100$')
//   }
//   return (
//     <Card className="expense-item">
// function ExpenseItem(props) {

// const clickHandler = ()=>{
//     console.log("Clicked!!!!");
//   }
//   const deleteHandler = (e)=>{
//     console.log("Deleted!!!!");
//     e.target.parentNode.remove();
//   }
//   return (
//     <Card className='expense-item'>
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${amount}</div>
//       </div>

   
//     <button onClick= {clickHandler}>Change Title</button>
    
//     <button onClick= {deleteHandler}>Delete</button>
//     </Card>

//   );
// }

//       <button onClick={amountFunc}>Change Expense</button>
//       <button onClick={clickHandler}>Change Title</button> </Card>
//   );
// };
// export default ExpenseItem;

import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, amFun] = useState(props.amount);

  const clickHandler = () => {
    setTitle('New Title...');
  }

  const amountFunc = () => {
    amFun('100$');
  }

  const deleteHandler = (e) => {
    console.log("Deleted!!!!");
    e.target.parentNode.remove();
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={amountFunc}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
