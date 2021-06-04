import React, { Component } from "react";
import { connect } from "react-redux";
import { approveRequester, declineRequester } from "./store/employersActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";


class EmployeeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      time: "",
      reason: "",
      type: "",
      // status:""

    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name);
  }

  handleSubmit = e => {
    e.preventDefault();
    const newRequester = {
      name: this.state.name,
      id: this.state.id,
      time: this.state.time,
      reason: this.state.reason,
      type: this.state.type,
      // status:this.state.status
    };

    console.log(this.props) 
    this.props.approveRequester(newRequester);
    window.location.href =window.location.origin +"/"


    this.setState = ({
      name: "",
      id: "",
      time: "",
      reason: "",
      type: "",
      // status:"",
    });
  };

  addNewRequester = newRequester => {
    this.props.approveRequester(newRequester)
  };

  declineRequester = requester_id => {
    this.props.declineRequester(requester_id)
  }
  render() {

    return (

      <div className="EmployeeForm">
        <div className="heading">
          <h1 className="text">EITSEC GHANA LEAVE FORM</h1>
        </div>

        <div className="h4">
          <h4>Fill in this form to request for a leave</h4>
        </div>
        
        <Container>
          <Row>
            <Col md={{ span: 3 }} />
            <Col md={{ span: 6 }}>
              <Form onSubmit={this.handleSubmit} className="inputs">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control type="text" name="name"
                    onChange={this.handleChange} />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control type="text" name="id"
                    onChange={this.handleChange} />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Duration</Form.Label>
                  <Form.Control type="text" name="time"
                    onChange={this.handleChange} />
                </Form.Group>

                <div className="types">
                  <Form.Group >
                    <Form.Label>Type of leave(please select):</Form.Label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Sick Leave</option>
                      <option>Maternity Leave</option>
                      <option>Bereavement Leave</option>
                      <option>Unpaid Leave</option>
                      <option>Cashual Leave</option>
                    </select>
                  </Form.Group>
                </div>

                <Form.Group >
                  <Form.Label>Reason for requesting leave</Form.Label>
                  <Form.Control className="reason" type="text" name="reason"
                    onChange={this.handleChange} />
                </Form.Group>

                <div className="button">
                  <Button variant="primary" type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>

      </div >
    );
  }
}
const mapStateToProps = (state) => ({
  requesters: state.requesters
})

const madDispatchToProps = {
  approveRequester: approveRequester,
  declineRequester: declineRequester
}
//  let event = new Event('click');
//  elem.dispatchEvent(event);

export default connect( mapStateToProps,madDispatchToProps)(EmployeeForm);