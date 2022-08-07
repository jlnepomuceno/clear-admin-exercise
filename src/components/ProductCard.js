import React from "react";
import Card from "react-bootstrap/Card";
import Rater from "react-rater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive,
  faMemory,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "react-bootstrap";

export default function ClearTable(props) {
  const {
    imageSrc,
    description,
    brand,
    model,
    price,
    rating,
    reviews,
    internalStorage,
  } = props;

  return (
    <Card>
      <Row>
        <Col xs={5} style={{ paddingRight: 0 }}>
          <Card.Img
            variant="top"
            src={imageSrc}
            alt="https://goodthinkinc.com/wp-content/uploads/2019/04/ATTLogo.jpg"
          />
        </Col>
        <Col xs={7} style={{ paddingLeft: 0 }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
            <Card.Title>{model}</Card.Title>
            <Rater total={5} rating={rating} interactive={false} />
            <p>
              {rating.toFixed(1)} | {reviews} reviews
            </p>
            <br />
            <Card.Text>
                <p><strong>${price}</strong> <FontAwesomeIcon icon={faHardDrive} /> {internalStorage}</p>
            </Card.Text>

            <Card.Text>
              {/* <span style={{ fontSize: "0.98em" }}>{description}</span> */}
              <Button>Check on ATT</Button>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

// <Card>
// <Card.Img variant="top" src={imageSrc} alt="https://goodthinkinc.com/wp-content/uploads/2019/04/ATTLogo.jpg"/>
// <Card.Body>
// <center><Rater total={5} rating={rating} interactive={false} /></center>
// <center><p>{rating.toFixed(1)} | {reviews} reviews</p></center>
//     <Card.Subtitle className="mb-2 text-muted">{brand}</Card.Subtitle>
//     <Card.Title>{model}</Card.Title>
//     <Row>
//         <Col><Card.Text><strong>${price}</strong></Card.Text></Col>
//         <Col><Card.Text><FontAwesomeIcon icon={faHardDrive}  /> {internalStorage}</Card.Text></Col>
//     </Row>

//     <Card.Text><span style={{ fontSize: "0.98em" }}>{description}</span></Card.Text>
// </Card.Body>
// </Card>
