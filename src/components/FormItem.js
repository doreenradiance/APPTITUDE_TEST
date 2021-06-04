import React from 'react';
import Button from "react-bootstrap/Button";
import {approveRequester,declineRequester} from "../store/employersActions"

const FormItem = (prop) => {
    const {name,id,time,reason,type,status} = prop.data
    return (
        <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{time}</td>
            <td>{type}</td>
            <td>{reason}</td>
            <td>{status}</td>
            <td id="buttons"><Button variant="success" onClick = { () => approveRequester(prop.id) }>Approve</Button>{" "}
                <Button variant="danger" onClick = { () => declineRequester(prop.id) } >Decline</Button>
            </td>
        </tr>
    );
}

export default FormItem;
