import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { requestData } from "../api/APIRequests";
import ClearTable from "../components/ProductCatalog";

// import { requestCatBreeds, requestCatImagesPerBreed, requestMoreCatImagesPerBreed } from "../api/CatsAPI";

export default function Home() {
  const [catalogData, setCatalogData] = React.useState([]);

  // Call API request to get the breeds
  // for the select input box 
  const getData = () => {
    requestData(data => {
      setCatalogData(data);
    });
  };
  
  // Sub-render the loaded cat results for clarity
  const renderResults = () => {
    if (catalogData.length === 0)
      return (
        <Col xs={12} style={{ marginBottom: "20px" }}>
          Loading data
        </Col>
      );
    return <ClearTable catalogData={catalogData}/>;
  };

  // Get SelectInput data
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <h1>Clear Admin Devices Catalog</h1> 
          </Col>
        </Row>
        {renderResults()}
      </Container>
    </div>
  );
}
