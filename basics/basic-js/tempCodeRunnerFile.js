readStream.on('data', (chunck) => {
	console.log('---- new chunk ----');
	console.log(chunck);
	writeStream.write('\nNEW CHUNK\n');
	writeStream.write(chunck);
});