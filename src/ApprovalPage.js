import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ApprovalPage extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* <h4>Employee Name{name}</h4>
                    <h4>Employee ID{id}</h4>
                    <h4>Duration{time}</h4>
                    <h4>Type{type}</h4>
                    <h4>Reason{reason}</h4>
                    <h4>Status{status}</h4>
                    <h4>Action</h4> */}
                </div>
                <div>
                   
                    <Form>
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