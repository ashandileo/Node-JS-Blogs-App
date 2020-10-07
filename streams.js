const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog2.txt')

// readStream.on('data', (chunk) => {
//   console.log('----- NEW CHUNK -----')
//   console.log("chunk", chunk)

//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk);
// })

// pipe
readStream.pipe(writeStream)