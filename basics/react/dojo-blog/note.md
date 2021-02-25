## important points

1. [npm run start] => to start the react app
2. what ever we wrote inside the function is jsx which is compiled by babel and then html is rendered out of it.
   https://medium.com/@wilstaley/jsx-vs-html-3aeb55ed6ee4
3. className is for jsx as class is reserved for js.
4. stateless functional component: https://tinyurl.com/sfc-exp
5. we can inline css in react like:
   style={{
   			color: 'white',
   			backgroundColor: '#f1356d',   // we don't use
   			borderRadius: '8px',
   		}}
6. onClick={<function>()} // paranthesis will invoke directly
   onClick={<function>} // this will wait for the event to happen
   // and to pass any parameter
   onClick={()=> {<function>(parameter1, parameter2)}}
   // this will not invoke itself as we haven't used paranthesis and will run when we click.
