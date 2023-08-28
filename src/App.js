import Expenses from "./components/Expenses/Expenses";
import React from "react";

const App=()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );
  // return React.createElement('div',{},React.createElement('h2',{},'Let\'s get started'),);//3 arg what should be created,obj that configure the element specifically an obj which sets all the attributesof this element , content bw opening and closing  div or what u created
  //instead of jsx u can use this  for this u have to import react from react 
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started"),
    React.createElement(Expenses,{items:expenses})//custom ke case me jo aap import kie ho 
  );
  // because u need import react in all the component file because this is the under the hood code whichkind of created automatically when u crate jsx


    

}

export default App;