import React from 'react';
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router';
// import {approveRequester,declineRequester} from "../store/employersActions"

const FormItem = (prop) => {
    const {name,id,time,reason,type,status} = prop.data

    const router = useHistory()

    return (
        <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{time}</td>
            <td>{type}</td>
            <td>{reason}</td>
            <td>{status}</td>
            <td id="buttons"><Button variant="success" onClick = { () => router.push( `/ApprovalPage/${prop.id}`) }>Approve</Button>{" "}
                <Button variant="danger" onClick = { () => router.push(`/DeclinePage/${prop.id}`) } >Decline</Button>
            </td>
        </tr>
    );
}

export default FormItem;
