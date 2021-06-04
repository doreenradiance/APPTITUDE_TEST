export const approveRequester = (requester) => {
    return (dispatch) => {
        dispatch({
            type: "APPROVE_REQUESTER",
            payload: requester
        }
        )
    }
}

export const declineRequester = (requester_id) => {
    return (dispatch) =>  {
        dispatch({
        type: "DECLINE_REQUESTER",
        payload: requester_id
        })
    }
}