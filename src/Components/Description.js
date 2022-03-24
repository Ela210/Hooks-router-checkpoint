import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { movidata } from "../Constant/Data";

const Description = () => {
  const params = useParams();
  const navigate = useNavigate();
  const about = movidata.find((el) => el.id == params.id);
  console.log(params.id);
  return (
    <div>
        <br/><br/>
      <h5>
        <iframe src={about.Trailer} alt="trailer" title="abouuut" />
      </h5>
      <br/> <br/>
      <h5>{about.Description}</h5>

      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default Description;
