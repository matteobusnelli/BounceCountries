import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
function CountryData({ countryInfo }) {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <>
      <Card className="card-custom">
        <Card.Header>
          <h3 className="card-custom-text">
            <span>{countryInfo.countryData.name.common}</span>
            <span className="text-muted mx-1">
              {countryInfo.countryData.altSpellings[0]}
            </span>
          </h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image
                className="card-custom-image"
                src={countryInfo.countryData.flags.png}
                alt={countryInfo.countryData.flags.alt}
                fluid
              />
            </Col>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <strong>Region:</strong>
                  <span className="mx-1">{countryInfo.countryData.region}</span>
                </ListGroupItem>
                {countryInfo.bordersNames && (
                  <ListGroupItem>
                    <strong>Borders:</strong>
                    <span className="mx-1">
                      {countryInfo.bordersNames.join(", ")}
                    </span>
                  </ListGroupItem>
                )}
                <ListGroupItem>
                  <strong>Capital:</strong>{" "}
                  <span className="mx-1">
                    {countryInfo.countryData.capital[0]}
                  </span>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Languages:</strong>
                  <span className="mx-1">
                    {Object.values(countryInfo.countryData.languages).join(
                      ", "
                    )}
                  </span>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Population:</strong>
                  <span className="mx-1">
                    {countryInfo.countryData.population.toLocaleString()}
                  </span>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Currencies:</strong>
                  <span className="mx-1">
                    {Object.values(countryInfo.countryData.currencies)[0].name}
                  </span>
                  <span className="mx-1">
                    {
                      Object.values(countryInfo.countryData.currencies)[0]
                        .symbol
                    }
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Button
                className="buttom-custom-style"
                onClick={() => setMoreInfo((oldValue) => !oldValue)}
              >
                {moreInfo ? "Close more info" : "View more info"}
              </Button>
              {moreInfo ? <ArrowDown size={25} /> : <ArrowUp size={25} />}
              {moreInfo && (
                <Container className="mt-3">
                  <Row>
                    <Col lg={4} sm={12} className="text-center mt-3">
                      <Row>
                        <Col>
                          <strong>Extention:</strong>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {countryInfo.countryData.area.toLocaleString()}
                          <span className="mx-1">km²</span>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4} sm={12} className="text-center mt-3">
                      <Row>
                        <Col>
                          <strong>Other spellings:</strong>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {countryInfo.countryData.altSpellings.join(", ")}
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4} sm={12} className="text-center mt-3">
                      <Row>
                        <Col>
                          <strong>Timezone:</strong>
                        </Col>
                      </Row>
                      <Row>
                        <Col>{countryInfo.countryData.timezones[0]}</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className="text-center mt-3">
                      <a
                        href={countryInfo.countryData.maps.googleMaps}
                        target="_blank"
                      >
                        <Button className="buttom-custom-style">
                          Open in GoogleMaps
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="30"
                            height="30"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#1c9957"
                              d="M42,39V9c0-1.657-1.343-3-3-3H9C7.343,6,6,7.343,6,9v30c0,1.657,1.343,3,3,3h30C40.657,42,42,40.657,42,39z"
                            ></path>
                            <path
                              fill="#3e7bf1"
                              d="M9,42h30c1.657,0-15-16-15-16S7.343,42,9,42z"
                            ></path>
                            <path
                              fill="#cbccc9"
                              d="M42,39V9c0-1.657-16,15-16,15S42,40.657,42,39z"
                            ></path>
                            <path
                              fill="#efefef"
                              d="M39,42c1.657,0,3-1.343,3-3v-0.245L26.245,23L23,26.245L38.755,42H39z"
                            ></path>
                            <path
                              fill="#ffd73d"
                              d="M42,9c0-1.657-1.343-3-3-3h-0.245L6,38.755V39c0,1.657,1.343,3,3,3h0.245L42,9.245V9z"
                            ></path>
                            <path
                              fill="#d73f35"
                              d="M36,2c-5.523,0-10,4.477-10,10c0,6.813,7.666,9.295,9.333,19.851C35.44,32.531,35.448,33,36,33s0.56-0.469,0.667-1.149C38.334,21.295,46,18.813,46,12C46,6.477,41.523,2,36,2z"
                            ></path>
                            <path
                              fill="#752622"
                              d="M36 8.5A3.5 3.5 0 1 0 36 15.5A3.5 3.5 0 1 0 36 8.5Z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M14.493,12.531v2.101h2.994c-0.392,1.274-1.455,2.185-2.994,2.185c-1.833,0-3.318-1.485-3.318-3.318s1.486-3.318,3.318-3.318c0.824,0,1.576,0.302,2.156,0.799l1.548-1.547C17.22,8.543,15.92,8,14.493,8c-3.038,0-5.501,2.463-5.501,5.5s2.463,5.5,5.501,5.5c4.81,0,5.637-4.317,5.184-6.461L14.493,12.531z"
                            ></path>
                          </svg>
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </Container>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
}

export default CountryData;
