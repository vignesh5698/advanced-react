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

#   ***Refs***

- Using refs we can access DOM nodes or react elements inside the render method.

***Create Refs using React.createRef()***

1.  Create the ref using React.createRef()
2.  Attach this ref to the input element
3.  Call the focus element for that input element

***Create Refs using callback refs***

1.  Create a property and assign the value `null`
2.  Create the method that will the assign dom element to the ref we created
3.  