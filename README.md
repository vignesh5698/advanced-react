#   ***Higher Order Components***

- HOC is simply a function which accepts Component as argument and returns new Component.
- We should not change the given component

***Things to remember while working with HOC***

1.  Don't mutate orginal component
2.  Pass unrelated props
3.  Don't use HOC inside render method
4.  Refs should not be passed

#   ***Context***

- Context provides a way to pass data through the component tree without having to pass props down manually at every level


***Things to remember while working with Context***

1.  Create the context
2.  Provide the context value
3.  Consume the context value


***Limitations in Context type***

1.  It only works with class components
2.  You can only subscribe to single context type