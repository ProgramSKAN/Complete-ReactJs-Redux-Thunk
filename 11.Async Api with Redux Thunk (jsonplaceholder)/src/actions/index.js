import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

/*
export const fetchPosts=async ()=>{
    const response=await jsonPlaceholder.get('/posts');
    return{
        type:'FETCH_POSTS',
        payload:response
    }
}

this code is a bad approch due to
1.Action creators must return plain JS objects (above code is not plain after babel due to async await) with a type property and optionally a payload object.
2.By the time our action gets to a reducer, we won't have fetched our data
*/

//WITH THUNK
export const fetchPosts=()=>{
    return async (dispatch,getState)=>{
        const response= await jsonPlaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response.data})
    }
}

//OR
// export const fetchPosts=()=>async (dispatch)=>{
//         const response= await jsonPlaceholder.get('/posts');
//         dispatch({type:'FETCH_POSTS',payload:response})}




/*
export const fetchUser=(id)=>async dispatch=>{
        const response= await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type:'FETCH_USER',payload:response.data})
    }
//for every record of the post, the fetchuser is called using 'id' to get the user who written the post even though is is already called in previous record of post.
//Remedy >lodash like below.momoize only runs _fetchUser function only once.refetch not possible but solves problem
*/

//with lodash memoize to avoid overfetching same userid
// export const fetchUser=(id)=>dispatch=>{
//     return _fetchUser(id,dispatch);
// }
// const _fetchUser=_.memoize(async  (id,dispatch)=>{
//         const response= await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({type:'FETCH_USER',payload:response.data});
// })

//without lodash memoize
export const fetchUser=(id)=>async dispatch=>{
    const response= await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})
}

export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{
    await dispatch(fetchPosts());

    //const userIds=_.uniq(_.map(getState().posts,'userId'));//unique userids
    //userIds.forEach(id=>dispatch(fetchUser(id)));
    //OR
    _.chain(getState().posts)
     .map('userId')
     .uniq()
     .forEach(id=>dispatch(fetchUser(id)))
     .value();
    
    //if await needed
    //Promise.all(userIds.forEach(id=>dispatch(fetchUser(id)))).then()
}

