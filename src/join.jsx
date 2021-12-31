import { Container, Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import './join.css';

function Join() {
    return (
        <div class="joins">
            <h1>Join the waitlist</h1>

            <div class="jos">
                <Row >
                    <Col md={8}><Form.Control placeholder="Enter number or email" /></Col>
                    <Col md={4}><Button>Submit</Button></Col>
                </Row>
            </div>

        </div>
    );
}

export default Join;