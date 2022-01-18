import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div class="foot" style={{background:"rgb(49,48,53)", color:"white"}}>
        <Container fluid>
            <Row style={{padding:"1%"}}>
                <Col  style={{fontSize:"2vh"}}>
                    list your show Got a show,Event,Activity or great experience?Partner with us & get Listed on BookMyShow
                </Col>
                
                <Col  style={{display:"flex", flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgb(236, 94, 113)",fontSize:"2vh"}} >Contact Today!</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center", padding:"3%", background:"rgb(64,64,67)"}}>
                <Col style={{fontSize:"2vh"}}>
                    24/7 CUSTUMOR CARE
                </Col>
                <Col>
                
                    <small style={{fontSize:"2vh"}}>RESEND BOOKING CONFIRMATION</small>
                    
                    
                </Col>
                <Col style={{fontSize:"2vh"}}>
                    SUBSCRIBR TO THE NEWSLETTER
                </Col>
            </Row>
            
            
        </Container>
        
    </div>
  );
}

export default Footer;