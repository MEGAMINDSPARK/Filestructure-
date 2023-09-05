import "./Card.css";
const Card=(props)=> {
  // props that every components receives(built in props) even if u r never setting it explicitely  is props.children children is the reserve name, we don't set children prop in this class  ,and the value of this special props children will always be the content between opening and the closing tag of our custom component
  // jo v expenseitem.js ke <Card /> k bich me hai wo props.children hai or iska value hai
  const classes = "card " + props.className; //here card is default class
  // return <div className="card">{props.children}</div>
  return <div className={classes}>{props.children}</div>;
}
export default Card;
