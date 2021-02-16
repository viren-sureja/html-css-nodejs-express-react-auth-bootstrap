function out_async() {
	return 'out_async';
}

let a = out_async();
console.log(a);

async function in_async() {
	// for the very first time when function is called it will print the below statement
	console.log('inside in_async function');

	// but as it reached this await (The await operator is used to wait for a Promise) and
	// will return the function to do another work. eg. clog(b) in our case.
	const res = await fetch('https://api.github.com/users');
	// this region will execute only after the promise is resolved.
	const users = await res.json();
	return users;
}
let b = in_async();

console.log(b);

// here promise is still pending and will show the same
// after that it will show b.then(value=>{}, reason=>{}) and hence will execute the next statements eg. clog('b is waiting...')
// value in case of fullfilled with returned value
// and reason in case of fullfilled but with some error.

b.then(
	(data) => console.log(data),
	(reason) => console.log(reason)
);

// after completing the below clog our call stack will go to the await at the prev function and will tell
// "i have executed all the things till the end of file now are u done or not"
// " and hence will return promise while b.then() will execute the promise."
console.log('b is waiting for promise to resolve');
