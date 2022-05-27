const monthReducer = (state = 0, action) => {
    switch (action.type){
        case "date" : 
            return new Date().getMonth();
        case "next" : 
            return state + 1;
        case "previous" : 
            return state - 1;
        default : 
            return state
    }
}

export default monthReducer;