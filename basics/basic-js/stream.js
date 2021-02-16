const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/* readStream.on('data', (chunck) => {
	console.log('---- new chunk ----');
	console.log(chunck);
	writeStream.write('\nNEW CHUNK\n');
	writeStream.write(chunck);
}); */

// piping
readStream.pipe(writeStream);
