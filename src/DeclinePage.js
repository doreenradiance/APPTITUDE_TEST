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
    declineRequester: declineRequester

}

export default connect(mapStateToProps, madDispatchToProps)( ApprovalPage);