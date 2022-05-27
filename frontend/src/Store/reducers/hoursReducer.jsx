const hoursReducer = (state = 0, action) => {
    switch (action.type){
        case "time" : 
            return new Date().getHours();
        default : 
            return state
    }
}

export default hoursReducer;