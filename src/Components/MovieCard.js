import React from "react";
import { Card, Button } from "react-bootstrap";
const MovieCard = ({ Move }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Move.PosterUrl} />
        <Card.Body>
          <Card.Title>{Move.Title}</Card.Title>
          <Card.Text>{Move.Description}</Card.Text>
          <Card.Text> Rating : {Move.Rate}</Card.Text>
          <Button variant="primary"> Click on me </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
