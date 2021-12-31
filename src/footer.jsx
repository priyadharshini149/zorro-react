import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

function Footer() {
    return (
        <Container class="footer">
            <img src="/image/zorro-grey-logo-footer.svg" class="grey-logo" />
            <Row class="coming">

                <Col><img src="/image/coming-soon-apple-store-button-black.svg" /></Col>
                <Col><img src="/image/coming-soon-google-play-button-black.svg" /></Col>

            </Row>
            <Row class="mail">
                <h6>hello@joinzorro.com</h6>
            </Row>
            <Row class="contact">
                <Col><img src="/image/twitter-white.svg" /></Col>
                <Col><img src="/image/linkedin-icon-white.svg" /></Col>
            </Row>
            <Row class="copyright">
                <h6>© 2021 ZorroApp. All Rights Reserved</h6>
            </Row>
        </Container>
    );
}
export default Footer;