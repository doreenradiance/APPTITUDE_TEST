import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

class ApprovalPage extends Component {
    render() {
        return (
            <Container>
                <div>
                    <h4>Name:</h4>
                    <h5> Dorcas Brown</h5>
                    <h4>Type of leave:</h4>
                    <h5>Sick Leave</h5>

                    <Form className="form">
                        <Form.Group >
                            <Form.Label>Reason for declining request </Form.Label>
                            <Form.Control className="hr's reason" type="text" name="id"
                                onChange="this.handleChange" />
                        </Form.Group>
                    </Form>
                    <div id="approveButton">
                        <Button variant="danger">Decline</Button>{" "}
                    </div>
                </div>
            </Container>

        )
    }
}

export default ApprovalPage;