import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {

console.log(props);

  return (
    <Card style={{ width: '18rem' ,backgroundColor:"brown" , padding :"20px" ,color:'wheat', margin:"20px" , borderRadius:'10px'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text> {props.data.body} </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;