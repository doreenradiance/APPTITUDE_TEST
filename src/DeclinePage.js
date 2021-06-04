import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { declineRequester } from "./store/employersActions";
import { connect } from "react-redux";

class ApprovalPage extends Component {
    
    id = this.props.match.params.id

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
                        <Button variant="danger" onClick={() => { this.props.declineRequester(this.id); this.props.history.push("/")}}>Decline</Button>{" "}
                    </div>
                </div>
            </Container>

        )
    }
}

const mapStateToProps = (state) => ({
    // requesters: state.requesters
})

const madDispatchToProps = {
    // approveRequester: approveRequester,
    declineRequester: declineRequester

}

export default connect(mapStateToProps, madDispatchToProps)( ApprovalPage);