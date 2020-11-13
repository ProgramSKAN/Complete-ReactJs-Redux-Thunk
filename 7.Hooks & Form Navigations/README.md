## React Hooks System
Hooks is all about giving function components additional functionality.
As the function components cannot make use of state,lifecycle methods,...
With Hooks System we can use following

## Primitive Hooks
1.UseState >function that lets you use state in a functional component

2.UseEffect >function that lets you use something like lifecycle methods in a functional components.we configure the hokk to run the code in one of the three scenarios:
    a)when the component is rerendered for the "first time only".
    b)when the component is rerendered for the "first time and  whenerver it redenders".
    c)when the component is rerendered for the "first time and (whenever it rerenders and some piece of data has changed)"
    

3.UseRef >function that lets you create a 'ref' in function component

4.useContext

5.useReducer

6.useCallback

7.useMemo

8.useImperativeHandle

9.useLayoutEffect

10.useDebugValue

#### Custom Hooks (say useTranslate) make use of primitive hooks
