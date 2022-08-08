import React from "react";
import { Col, Button, Row, Offcanvas, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";

const SORT_SELECTION = [
  { value: "newest", label: "Newest"},
  { value: "rating", label: "Top Rated"},
  { value: "most-rating", label: "Most Rated"},
  { value: "low-price", label: "Price: Low to High"},
  { value: "high-price", label: "Price: High to Low"}
]

export default function ClearTable(props) {
  const { catalogData } = props;
  const [internalData, setInternalData] = React.useState(catalogData);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("newest");

  const handleFilterClick = () => {
    setOpenFilter(true);
  };

  const handleClose = () => {
    setOpenFilter(false);
  };

  const handleApplyFilter = () => {
    setOpenFilter(false);
    switch(radioValue) {
      case "newest":
        setInternalData(internalData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)));
        break;
      case "rating":
        setInternalData(internalData.sort((a, b) => b.mStarRatings - a.mStarRatings));
        break;
      case "most-rating":
        setInternalData(internalData.sort((a, b) => b.mNumOfStarReviews - a.mNumOfStarReviews));
        break;
      case "low-price":
        setInternalData(internalData.sort((a, b) => a.msrp - b.msrp));
        break;
      case "high-price":
        setInternalData(internalData.sort((a, b) => b.msrp - a.msrp));
        break;
      default:
        break;
    }
  };

  const handleClearFilter = () => {
    setRadioValue("newest");
  };

  React.useEffect(() => {
    handleApplyFilter();
  }, []);

  return (
    <>
      <Row style={{ marginBottom: "10px", marginTop: "20px" }}>
        <Col>
          <Button onClick={handleFilterClick}>Sort</Button>
        </Col>
        <Col>
          <p className="float-end">{internalData.length} products found</p>
        </Col>
      </Row>
      <Row>
        {internalData.map((item) => {
          return (
            <Col md={4} sm={6} xs={12} style={{ marginBottom: "20px" }} id={item.mId}>
              <ProductCard
                imageSrc={`https:${item.mImageUrl}`}
                brand={item.mBrand}
                model={item.mModel}
                price={item.mListPrice}
                rating={item.mStarRatings}
                reviews={item.mNumOfStarReviews}
                productLink={item.mProductPageURL}
                isNewArrival={item.mIsNewArrival}
                internalStorage={`${item.internalMemory}  ${item.internalMemoryUOM}`}
                productURL={item.PDPPageURL}
              />
            </Col>
          );
        })}
      </Row>

      <Offcanvas show={openFilter} onHide={handleClose} style={{ padding: "20px"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sort Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Row style={{ paddingBottom: "5%"}}>
            <Col>
              <h6>Sort by</h6>
              {
                SORT_SELECTION.map((radio, index) => (
                  <Form.Check
                    key={index}
                    type="radio"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={e => setRadioValue(e.currentTarget.value)}
                    label={radio.label}
                  />
                )) 
              }
            </Col>
          </Row>

          <Row style={{ paddingBottom: "5%"}}>
            <Col>
              <Button className="float-end" onClick={handleApplyFilter}>Apply Sort</Button>
            </Col>
            <Col>
              <Button className="btn-warning float-start" onClick={handleClearFilter}>Reset</Button>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
