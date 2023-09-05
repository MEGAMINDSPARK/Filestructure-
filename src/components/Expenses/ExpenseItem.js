import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

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
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    {/* <button onClick= {()=>{console.log('clicked!')}} >Change Title</button> */}
    <button onClick= {clickHandler}>Change Title</button>
    
    <button onClick= {deleteHandler}>Delete</button>
    {/* i want to change props.title after cliking on button using props: on se start hota hai  */}
    </Card>

  );
}

export default ExpenseItem;