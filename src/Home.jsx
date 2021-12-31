import { Container, Row, Col, Button } from 'react-bootstrap';
import './home.css';
import Typical from 'react-Typical';
function Home() {
    return (
        <Container fluid>

            <div class="logo">
                <img src="/image/zorro-icon-white (1).svg" />
            </div>

            <Row>

                <Col md={5} xs={12}>
                    <div class="home">
                        <h1>ZORRO</h1>
                        <h3>A new-age social network to pseudonymously express your thoughts.</h3><br></br>
                        <p>Wear a
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={
                                    [
                                        'mask & build your own private identity.',
                                        1000
                                    ]
                                }

                            />

                        </p><br></br>
                        <Button>Joint the waitlist</Button>
                    </div>
                </Col>
                <Col md={3} xs={12}>

                    <img src="/image/zorro-iphone-mockup-dark.png" class="phone" />

                </Col>
            </Row>
        </Container>
    );
}
export default Home;