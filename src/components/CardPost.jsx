import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"

const CardPosts = ({ userId, title, body }) => (
    <Col>
      <Card style={{margin: '10px'}}>
        <Card.Header as='h4'>{title}</Card.Header>
        <Card.Body>
          <Card.Title>Usuario {userId}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

export default CardPosts