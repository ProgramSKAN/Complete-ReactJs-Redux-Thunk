## REDUX Cycle
Action Creator > Action > Dispatch > Reducers > State
##### Eg: incase of insurance company
person dropping off the form > the form > form receiver > departments > compiled department data 

###### run
> npm install --save redux react-redux axios redux-thunk

1.redux : the state management library
2.react-redux : integration layer between react and redux
3.axios : network requests
4.reduc-thunk : middleware to help us make requests in redux application

##### React-redux flow
1.Action creator called
2.Action returned
3.Action sent to all reducers
4.reducers run

###### Synchronous action creator
instantly returns action with data ready to go

###### ASynchronous action creator
Takes amount of time for it to get its data ready to go 

## REDUX Cycle with middleware
(to change state of an app we call an)>ACTION CREATOR >>>> 
(produces)> ACTION >>>>
(gets fed to)> DISPATCH >>>>
(forward action to)> MIDDLEWARE >>>>
(sends action to)> REDUCER >>>>
(creates new)> STATE >>>>
(wait until we need to update state again)

## Middleware in Redux
1.Function that gets called for every action we dispatch.
2.Has the ability to STOP,MODIFY or otherwise mess around with actions.
3.Tons of opensoure middleware exists.
4.Most popular use of middleware is for dealing with async actions.
5.We are going to use a middleware called 'Redux Thunk' to solve our our aync issues.

## Normal Rules
1.Action creators must return  action objects
2.Action must have a type property
3.Actions can optionally have a payload

## Rules with Redux thunk
1.Action creators can return action objects (or) Action creators can return functions
2.if an action object gets returned, it must have a type
3.if an action object get returned, it can optionally have a payload

## Rules of Reducer
1.must return any value besides undefined.
2.produces STATE or data to be usedinside of your app using previous state and the action(reducers are pure).
3.must not return reach 'out of itself' to decide what value to return.ie.reducers should not be used to call functions,https requests,...
4.must not mutate its input STATE argument.

## Inside Reducers
1.Removing element from array >> GOOD : state.filter(element=>element!=='hi') | BAD: state.pop

2.Adding an elemnet to array >> Good: [...state,'hi'] | BAD: state.push('hi')

3.Replacing an element in array >> GOOD: state.map(el=>el==='hi'?'bye':el) | BAD: state[0]='hi'

4.updating a property in an object>>> GOOD: {...state,name:'sam'} | BAD: state.name='sam'
5.adding a property to an object>>> GOOD: {...state,age:30} | BAD: state.age=30
6.removing  a property from an object>>> GOOD: {...state,age:undefined} (or) _.omit(state,'age') | BAD: delete state.name
 