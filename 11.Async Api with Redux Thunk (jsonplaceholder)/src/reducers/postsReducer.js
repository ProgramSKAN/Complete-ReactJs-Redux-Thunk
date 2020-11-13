export default (state=[],action)=>{
    //dont call external functions,https requests inside reducers.
    //dont mutate 'state' input argument.we can but if we mutate state (eg:state.push(1234)), and return state.then it wont detect change.and application wont rerender
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}