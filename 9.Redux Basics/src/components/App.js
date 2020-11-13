import React from 'react';
import {createStore,combineReducers} from 'redux';

console.clear();

//ACTION CREATOR & ACTION
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,//or just name,amount
      amount: amount
    }
  };
};

//ACTION CREATOR & ACTION
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

//ACTION CREATOR & ACTION
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,//or just name,amount
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

//REDUCERS
const claimsHistory=(oldListOfClaims=[],action)=>{
  if(action.type==='CREATE_CLAIM'){
    // oldListOfClaims.push(action.payload)//avoid this as it make changes to existing object
    return [...oldListOfClaims,action.payload]
  }
  return oldListOfClaims;
}

//REDUCERS
const accounting=(bagOfMoney=100,action)=>{
  if(action.type==='CREATE_CLAIM'){
    return bagOfMoney-action.payload.amountOfMoneyToCollect;
  }else if(action.type==='CREATE_POLICY'){
    return bagOfMoney+action.payload.amount;
  }
  return bagOfMoney;  
}

//REDUCERS
const policies=(listOfPolicies=[],action)=>{
  if(action.type==='CREATE_POLICY'){
    return [...listOfPolicies,action.payload.name];
  }else if(action.type==='DELETE_POLICY'){
    return listOfPolicies.filter(name=>name!==action.payload.name);
  }
  return listOfPolicies;  
}

const ourDepartments=combineReducers({
    accounting:accounting,
    //moneyWeHave:accounting,//keys can be diff name than reducer but convention is keeping same
    claimsHistory:claimsHistory,
    policies:policies
})

const store=createStore(ourDepartments);
const action=createPolicy('Alex',20);
console.log(action);
store.dispatch(action);
store.dispatch(createPolicy('jack',10))
store.dispatch(createPolicy('mike',5))
console.log(store.getState());

store.dispatch(createClaim('Alex',120));
console.log(store.getState());

store.dispatch(deletePolicy('mike'));
console.log(store.getState());



const App=()=>{

    
    return (<div>REDUX</div>)
}
export default App;
