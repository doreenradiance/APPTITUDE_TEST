import React from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import FormItem from "./components/FormItem";

const Formlist = ({ name, id, time, reason, type, status, requesters
  // declineRequester
}) => {

  const router = useHistory()
  // handleClick = () => {
  //   declineRequester(id)
  // }

  console.log("state", requesters)
  return (
    <div>
      <div className="heading">
        <h1 className="text">LIST OF LEAVE REQUESTS</h1>
      </div>
      <div>
        <Button onClick={() => router.push("/EmployeeForm")}>Add requesters</Button>
      </div>
      <Container>
        <div className="table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employee Name{name}</th>
                <th>Employee ID{id}</th>
                <th>Duration{time}</th>
                <th>Type{type}</th>
                <th>Reason{reason}</th>
                <th>Status{status}</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>
              {requesters.map((request, i) => {
                return <FormItem data={request} key={i} id={i} />

              })}
            </tbody>
          </Table>
        </div>
      </Container>

    </div>

  )
}

const mapStateToProps = (state) => ({
  requesters: state.requesters
})

const madDispatchToProps = {
  // approveRequester: approveRequester,
  // declineRequester: declineRequester
}

export default connect(mapStateToProps, madDispatchToProps)(Formlist);