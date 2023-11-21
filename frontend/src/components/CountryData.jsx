import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

function CountryData({ countryInfo }) {
  const [otherInfo, setOtherInfo] = useState(false);
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
                  <strong>Driving Side:</strong>
                  <span className="mx-1">
                    {countryInfo.countryData.car.side}
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
                <ListGroupItem>
                  <strong>Alternate Spellings:</strong>
                  <span className="mx-1">
                    {countryInfo.countryData.altSpellings.join(", ")}
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <span
                className="fw-bold text-decoration-underline other-info-custom"
                onClick={() => setOtherInfo((oldValue) => !oldValue)}
              >
                Other Info
              </span>
              {otherInfo && (
                <Container className="mt-3">
                  <Row>
                    <Col lg={4} sm={12}>
                      ciao1
                    </Col>
                    <Col lg={4} sm={12}>
                      ciao2
                    </Col>
                    <Col lg={4} sm={12}>
                      ciao3
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} sm={12}>
                      ciao4
                    </Col>
                    <Col lg={4} sm={12}>
                      ciao5
                    </Col>
                    <Col lg={4} sm={12}>
                      ciao6
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
