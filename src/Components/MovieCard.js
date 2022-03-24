import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ Move }) => {
  const navigate=useNavigate()

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Move.PosterUrl} />
        <Card.Body>
          <Card.Title>{Move.Title}</Card.Title>
          <Card.Text>{Move.Description}</Card.Text>
          <Card.Text> Rating : {Move.Rate}</Card.Text>
          <Button onClick={()=>navigate(`/Movies/Description/${Move.id}`)}>
            Watch trailer 
          </Button>
                  </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
