import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
    {/* here Card is custom component defined by me so i have to add class name incard.js  also ,  all the default html components out of the box support class name for adding css classes to render html elements but ur custom components only supports what u tell them to supportsso u have to set className on ur card component */}
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;