import { Container, Row, Col, Button } from 'react-bootstrap';
import './investor.css';

function Investor() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>Our Investors</h1>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={3} xs={6}><img src="/image/3one4-logo.png" class="logos" /></Col>
                        <Col md={3} xs={6}><img src="/image/9unicorns-logo.png" class="logos" /></Col>
                        <Col md={3} xs={6}><img src="/image/eximus-logo.png" class="logos" /></Col>
                        <Col md={3} xs={6}><img src="/image/roots-logo.png" class="logos" /></Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={2} xs={6}><img src="/image/investor1.png" class="invest_img" />
                    <div class="name">Vijay Shekhar Sharma</div>
                    <p class="destination">Founder & CEO, Paytm</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-2.png" class="invest_img" />
                    <div class="name">Ashish Hemrajani</div>
                    <p class="destination">Founder & CEO, <br></br>BookMyShow</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-23.png" class="invest_img" />
                    <div class="name">Ritesh Agarwal</div>
                    <p class="destination">Founder & CEO, OYO Rooms</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-4.png" class="invest_img" />
                    <div class="name">Kunal Shah</div>
                    <p class="destination">Founder & CEO, CRED</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-5.png" class="invest_img" />
                    <div class="name">Ashneer Grover</div>
                    <div>
                        <p class="destination">Founder & CEO, BharatPe</p>
                    </div>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-6.png" class="invest_img" />
                    <div class="name">Lalit Keshre</div>
                    <p class="destination">Founder & CEO, Groww</p>
                </Col>

            </Row>
            <Row>
                <Col md={2} xs={6}><img src="/image/investor-7.png" class="invest_img" />
                    <div class="name">Ankit Nagori</div>
                    <p class="destination">Founder, Curefit & Foodfit</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-8.png" class="invest_img" />
                    <div class="name">Gaurav Gupta</div>
                    <p class="destination">Co-Founder, Zomato</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-9.png" class="invest_img" />
                    <div class="name">Abhay Hanjura</div>
                    <p class="destination">Founder & CEO, Paytm</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-10.png" class="invest_img" />
                    <div class="name">Nitish Mittersain</div>
                    <p class="destination">Founder & CEO, Nazara</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-11.png" class="invest_img" />
                    <div class="name">Vivek Gupta</div>
                    <p class="destination">Co-Founder & COO, Licious</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-12.png" class="invest_img" />
                    <div class="name">Ankiti Bose</div>
                    <p class="destination">Founder & CEO, Zilingo</p>
                </Col>

            </Row>
            <Row>
                <Col md={2} xs={6}><img src="/image/investor-13.png" class="invest_img" />
                    <div class="name">Jitendra Gupta</div>
                    <p class="destination">Founder & CEO, Jupiter</p>


                </Col>
                <Col md={2} xs={6}><img src="/image/investor-14.png" class="invest_img" />
                    <div class="name">Amrish Rau</div>
                    <p class="destination">CEO, Pine Labs<br></br>
                        Founder, CitrusPay</p>

                </Col>
                <Col md={2} xs={6}><img src="/image/investor-15.png" class="invest_img" />
                    <div class="name">Aprameya Radhakrishna</div>
                    <p class="destination">Founder & CEO, Koo</p>

                </Col>
                <Col md={2} xs={6}><img src="/image/investor-16.png" class="invest_img" />
                    <div class="name">Aloke Bajpai</div>
                    <p class="destination">Founder & CEO, ixigo</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-17.png" class="invest_img" />
                    <div class="name">Amit Lakhotia</div>
                    <p class="destination">Founder & CEO, Park+</p>
                </Col>
                <Col md={2} xs={6}><img src="/image/investor-18.png" class="invest_img" />
                    <div class="name">Ritesh Malik</div>
                    <p class="destination">Co-Founder & COO, Innov8</p>
                </Col>

            </Row>
            <h5><a>+15 More</a></h5>

        </Container>
    );
}
export default Investor;