import React from "react";
import Card from "react-bootstrap/Card";
import Rater from "react-rater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button, Badge } from "react-bootstrap";

export default function ClearTable(props) {
  const {
    imageSrc,
    brand,
    model,
    price,
    rating,
    reviews,
    internalStorage,
    isNewArrival,
    productURL
  } = props;
  const [imgURL, setImageURL] = React.useState(imageSrc);

  return (
    <Card>
      <Row>
        <Col xs={5} style={{ paddingRight: 0 }}>
          <Card.Img
            variant="top"
            src={imgURL}
            alt="Product"
            onError={() => setImageURL("https://goodthinkinc.com/wp-content/uploads/2019/04/ATTLogo.jpg")}
          />
        </Col>
        <Col xs={7} style={{ paddingLeft: 0 }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">{brand} 
                {isNewArrival && <Badge bg="danger">New Arrival</Badge>}
            </Card.Subtitle>
            <Card.Title>{model}</Card.Title>
            <p><Rater total={5} rating={rating} interactive={false} /> 
            {` ${rating.toFixed(1)} | ${reviews} reviews`}
            </p>
            <FontAwesomeIcon icon={faHardDrive} /> {internalStorage}
            <br />
            <br />
            <Card.Text>
                <strong>${price}</strong>
            </Card.Text>

            <Card.Text>
              {/* <span style={{ fontSize: "0.98em" }}>{description}</span> */}
              <Button target="_blank" href={`https:${productURL}`}>Check on ATT</Button>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
