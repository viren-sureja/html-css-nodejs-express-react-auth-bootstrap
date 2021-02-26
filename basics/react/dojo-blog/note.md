## important points

-  npx create-react-app <app_name>
   cd <app_name>
-  [npm run start] => to start the react app
-  what ever we wrote inside the function is jsx which is compiled by babel and then html is rendered out of it.
   https://medium.com/@wilstaley/jsx-vs-html-3aeb55ed6ee4

-  className is for jsx as class is reserved for js.
-  stateless functional component: https://tinyurl.com/sfc-exp
-  we can inline css in react like:
   style={{
    			color: 'white',
    			backgroundColor: '#f1356d',   // we don't use
    			borderRadius: '8px',
    		}}
-  onClick={<function>()} // paranthesis will invoke directly
   onClick={<function>} // this will wait for the event to happen
   // and to pass any parameter
   onClick={() => {<function>(parameter1, parameter2)}}
   // this will not invoke itself as we haven't used paranthesis and will run when we click.

-  props are used to transfer properties from parent to child component
-  in react part the arrow function is like: const function_name = () => ();
-  useState is one of the type of hooks ohter are: useEffect

-  useFetch.js is custom state-hook so that we can use repeatedly but remember to name in such a way useFetch.
-  used react-router-dom to route to different path
   source: https://tinyurl.com/wu8zxp7y

-  switch component inside the 'react-router-dom' make sure at a time only one route is accessible.
-  use "exact" param to avoid partial matching when we have more than 1 route with somewhat matching name.
-  use <Link> instead of <a> to avoid request to server and load directly from react bundle.
   ref: https://tinyurl.com/yvb7ud4s
-  error occured as shown above in the video, now to avoid that error we use cleanup function with abortController
-  history.go(-1); // means to go back one time.
   history.push('/'); // means redirect to home page
-  blogs.slice(0).reverse().map() // slice(0) means copy of array from 0 to last element and reverse it.
-  <Route path="*"> means to catch any route which is different/not matched in above routes
