import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <h2 style={{color:"white"}}>Premieres</h2>
        <Carousel indicators={false} variant="dark">
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card style={{height:"400px", width:"400px"}}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BNDc4YmY4ZjMtMmMxOS00ZDdhLWI3NjItMWRjZTkzNWE0NDQ5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" style={{height:"300px"}} />
                        <Card.Body>
                        <Card.Title> <div>Dhadak</div>
                           <div>Hindi</div> 
                        </Card.Title>
                        
                        </Card.Body>
                    </Card  >
                    <Card style={{height:"400px", width:"400px"}}>
                        <Card.Img variant="top" src="https://assetscdn1.paytm.com/images/cinema/3-gallery-f2f859d0-4228-11ec-96fc-97f32fc355f8.jpg"style={{height:"300px"}} />
                        <Card.Body>
                        <Card.Title><div>Pushpa</div>
                           <div>Hindi</div></Card.Title>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height:"400px", width:"400px"}}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51VSqLz1wyL._SX342_.jpg" style={{height:"300px"}} />
                        <Card.Body>
                        <Card.Title><div>Befikre</div>
                           <div>Hindi</div></Card.Title>
                       
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card style={{height:"400px", width:"400px"}}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" style={{height:"300px"}} />
                        <Card.Body>
                        <Card.Title><div>Shershaah</div>
                           <div>Hindi</div></Card.Title>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height:"400px", width:"400px"}}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BM2IwMjI2NjEtYzYwZi00Mzg1LWE4MWUtOWJhMzE3OGM1YWVmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg" style={{height:"300px"}}/>
                        <Card.Body>
                        <Card.Title><div>Hate Story 4</div>
                           <div>Hindi</div></Card.Title>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height:"400px", width:"400px"}}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMDkxNTUyYjUtZjNlYS00NmRiLWE4MTUtOWYwZjk1MmMzNTk2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"style={{height:"300px"}} />
                        <Card.Body>
                        <Card.Title><div>Masti</div>
                           <div>Hindi</div></Card.Title>
                        
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;