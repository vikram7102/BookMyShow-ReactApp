import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function SingleMovieFetch() {
    const { movid } = useParams();
    const [Singledata, setSingleData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`https://book-my-show-backend-7.herokuapp.com/Movies/${movid}`);
            console.log(response);
            setSingleData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);
    // console.log(movid);
    return (
        <div>
            <Container fluid style={{ padding: "5%", background: "pink" }}>
                <Row style={{ textAlign: "center" }}>
                    {Singledata.map((mov) => {
                        return(
                        <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                            <Card>
                                <Card.Img variant="top" src={mov.imageurl} />
                                <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )

                    })}
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovieFetch;