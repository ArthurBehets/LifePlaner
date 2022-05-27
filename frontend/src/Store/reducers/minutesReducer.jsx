const minutesReducer = (state = 0, action) => {
    switch (action.type){
        case "time" : 
            return new Date().getMinutes();
        default : 
            return state
    }
}

export default minutesReducer;