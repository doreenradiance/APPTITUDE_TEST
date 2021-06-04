import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ApprovalPage extends Component {
    render() {
        return (
            <div>
                <h4>Name:</h4>
                    <h5> Dorcas Brown</h5>
                    <h4>Type of leave:</h4>
                    <h5>Sick Leave</h5>
                <div>
                   
                    <Form className="form">
                        <Form.Group >
                            <Form.Label>Reason for approving request </Form.Label>
                            <Form.Control className="hr's reason" type="text" name="id"
                                onChange="this.handleChange" />
                        </Form.Group>
                    </Form>
                    <div id="approveButton">
                    <Button variant="success">Approve</Button>{" "}
                    </div>
                </div>
            </div>
        )
    }
}

export default ApprovalPage;