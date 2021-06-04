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
      <Button className="button" onClick={() => router.push("/EmployeeForm")}>Add requeters</Button>
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
              {/* <tr>
                <td>Dorcas Brown</td>
                <td>2055228</td>
                <td>02/09/2020</td>
              <td>Maternity Leave</td>
              <td>Reason</td>
              <td>Pending</td>
                <td id="buttons"><Button variant="success">Approve</Button>{" "}
                <Button variant="danger" >Decline</Button>
                </td>
              </tr> */}
              {/* <tr>
                <td>Emmanuel Ayi</td>
                <td>1122112</td>
                <td>02/09/2020</td>
                <td>Sick Leave</td>
                <td>Reason</td>
                <td>Pending</td>
                <td id="buttons"><Button variant="success">Approve</Button>{" "}
                <Button variant="danger" >Decline</Button>
                </td>
              </tr> */}
              {/* <tr>
                <td>Aaron Lartey</td>
                <td>654890</td>
                <td>12/12/2013</td>
                <td>Bereavement Leave</td>
                <td>Reason</td>
                <td>Pending</td>
                <td id="buttons"><Button variant="success">Approve</Button>{" "}
                <Button variant="danger" >Decline</Button>
                </td>
              </tr> */}
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