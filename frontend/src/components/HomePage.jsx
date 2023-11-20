import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Loading from "./Loading";
import API from "../API";

function HomePage() {
  const [countryName, setCountryName] = useState(undefined);
  const [countryInfo, setCountryInfo] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!countryName) setErrorMsg("Country name is required.");
    else {
      //API
      setLoading(true);
      try {
        const result = await API.getCountryInfo(countryName);
        setCountryInfo(result);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };

  return (
    <Container className="mt-3">
      {loading ? <Loading /> : null}
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-end">
          <Col className="w-100 max-width-55ch">
            <FloatingLabel label="Country name">
              <Form.Control
                type="text"
                placeholder="Write a county name"
                className="label-custom-style"
                onChange={(e) => setCountryName(e.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <Button type="submit" className="buttom-custom-style">
              Search
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={6} sm={6} xs={6}>
            {errorMsg ? (
              <Alert
                variant="danger"
                dismissible
                onClose={() => setErrorMsg("")}
              >
                {errorMsg}
              </Alert>
            ) : null}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default HomePage;
