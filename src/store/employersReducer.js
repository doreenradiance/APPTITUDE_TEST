// import {v4 as uuid } from "uuid";
 
const initialState = {
    requesters: [
        {
            // id:"1",
            name: "Dorcas Brown",
            id: "2055228",
            time: "02/09/2020",
            reason: "Reason",
            type: "Maternity Leave",
        },

        {
            // id:"2",
            name: "Emmanuel Ayi",
            id: "1122112",
            time: "02/09/2020",
            reason: "Reason",
            type: "Sick Leave",
        },
        {
            // id:"3",
            name: "Aaron Lartey",
            id: "654890",
            time: "12/12/2013",
            reason: "Reason",
            type: "Bereavement Leave",
        },
    ]
}

const employersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_REQUESTER":
            const newRequester = {
                // id:uuid(),
                name: action.payload.name,
                id: action.payload.id,
                time: action.payload.time,
                reason: action.payload.reason,
                type: action.payload.type,
                status:action.payload.status
            };
            return { ...state, requesters: [...state.requesters, newRequester] }

        case "DECLINE_REQUESTER":
            const filteredRequesters = state.requesters.map((requester,i) =>{
                if(i === action.payload){
                    return {...requester,status:"declined"}
                } else return requester
            })
            return{...state, requesters: filteredRequesters}

            
        case "APPROVE_REQUESTER":
            const filteredRequesters = state.requesters.map((requester,i) =>{
                if(i === action.payload){
                    return {...requester,status:"approved"}
                } else return requester
            })
            return{...state, requesters: filteredRequesters}

        default:
            return state;
    }
}

export default employersReducer;