import { Card } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
const Player = ({
    name,
    age,
    team,
    nationality,
    jersyNumber,
    image,
}) => {

    return <Card className ='App' style={{ width: '18rem' }}>
    <Card.Img className='img' variant="top" src={image} />
    <Card.Body>
      <Card.Title className="name">{name}</Card.Title>
      <Card.Text>
        {age}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item className="disc">{team}</ListGroup.Item>
      <ListGroup.Item className="disc">{nationality}</ListGroup.Item>
      <ListGroup.Item className="price">jersy {jersyNumber}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    </Card.Body>
  </Card>

}

export default Player