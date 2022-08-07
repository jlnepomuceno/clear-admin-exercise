import React from "react";
import { Col, Button, Row, Offcanvas, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";

const SORT_SELECTION = [
  // { id: "name-asc", label: "Name: Asc", group: "sort-group"},
  // { id: "name-desc", label: "Name: Desc", group: "sort-group"},
  { id: "newest", label: "Newest", group: "sort-group"},
  { id: "low-price", label: "Price: Low to High", group: "sort-group"},
  { id: "high-price", label: "Price: High to Low", group: "sort-group"},
  { id: "rating", label: "Top Rated", group: "sort-group"}
]

export default function ClearTable(props) {
  const { catalogData } = props;
  const [openFilter, setOpenFilter] = React.useState(false);
  const [valueReset, setValueReset] = React.useState(true);

  const handleFilterClick = () => {
    setOpenFilter(true);
  };

  const handleClose = () => {
    setOpenFilter(false);
  };

  React.useEffect(() => {
    console.log("reset")
  }, [valueReset])

  return (
    <>
      <Row style={{ marginBottom: "10px", marginTop: "20px" }}>
        <Col>
          <Button onClick={handleFilterClick}>Filters</Button>
        </Col>
        <Col md={1}>
          <p className="float-end">Count</p>
        </Col>
      </Row>
      <Row>
        {catalogData.map((item) => {
          return (
            <Col md={4} sm={6} xs={12} style={{ marginBottom: "20px" }}>
              <ProductCard
                imageSrc={`https:${item.mImageUrl}`}
                name={item.mName}
                brand={item.mBrand}
                model={item.mModel}
                price={item.mListPrice}
                rating={item.mStarRatings}
                reviews={item.mNumOfStarReviews}
                description={item.mDescription}
                productLink={item.mProductPageURL}
                internalStorage={`${item.internalMemory}  ${item.internalMemoryUOM}`}
              />
            </Col>
          );
        })}
      </Row>

      <Offcanvas show={openFilter} onHide={handleClose} style={{ padding: "20px"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <Row style={{ paddingBottom: "5%"}}>
            <Col>
              <h6>Filter by</h6>
              <Form.Check
                type="radio"
                id={"default-radio"}
                label={"default radio"}
              />
            </Col>
          </Row> */}

          <Row style={{ paddingBottom: "5%"}}>
            <Col>
              <h6>Sort by</h6>
              {
                SORT_SELECTION.map(el => {
                  return (
                    <Form.Check
                      type="radio"
                      id={el.id}
                      checked={valueReset}
                      label={el.label}
                      name={el.group}
                      value={valueReset}
                      onChange={(e)=> console.log("selected", e)}
                    />
                  )
                }) 
              }
            </Col>
          </Row>

          <Row style={{ paddingBottom: "5%"}}>
            <Col>
              <Button className="float-end">Apply Filter</Button>
            </Col>
            <Col>
              <Button className="btn-warning float-start" onClick={()=>setValueReset(!valueReset)}>Reset</Button>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
