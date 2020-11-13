## State
only usable with class based components  (for function components use HOOKS system)

props are different than state

STATE in JS object contains data relevent to a component

updateing STATE on a component causes the component to almost instantly rerender

STATE must be initialized when a component is created

STATE can only be updated using the function 'SetState'

## Component Lifecycle
1.Constructor
2.render
--content visible on screen
3.ComponentDidMount
--wait for updates
4.ComponentDidUpdate
--wait until component is no longer shown
5.ComponentWillUnmount


## Other lifecycle methods (rarely used)
1.shouldComponentUpdate
2.getDerivedStateFromProps
3.getSnapshotBeforeUpdate

## Refs
1.Gives access to the single DOM element

2.we create refs in the constructor, assign them to instance variables, then pass to particular JSX element as props