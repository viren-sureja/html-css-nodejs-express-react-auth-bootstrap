const fs = require('fs');

// -- reading files --

/* fs.readFile('./docs/blog1.txt', (err, data) => {
	if (err) console.log(err);
	else console.log(data.toString());
}); */

// -- writing files --

/* fs.writeFile('./docs/blog1.txt', 'hello world', () => {
	console.log('file was written succesfully :)');
});
fs.writeFile('./docs/blog2.txt', 'hello to new world', () => {
	console.log('file was written succesfully :)');
}); */

// -- directories --

/* if (!fs.existsSync('./assets')) {
	fs.mkdir('./assets', (err) => {
		if (err) console.log(err);
		else console.log('directory succesfully created :)');
	});
} else {
	fs.rmdir('./assets', (err) => {
		if (err) console.log(err);
		else console.log('folder deleted');
	});
} */

// -- deleting files --

if (fs.existsSync('./docs/deleteme.txt')) {
	fs.unlink('./docs/deleteme.txt', (err) => {
		if (err) console.log(err);
		else console.log('file deleted :(');
	});
}
