const fs = require('fs')

// reading files
// fs.readFile('./docs/initext.txt', (err, data) => {
//   if (err) {
//     console.log('mohon maap error pak');
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile('./docs/initext.txt', 'ini baru ditulis pak', () => {
//   console.log('berhasil hore')
// });

// direcotries
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log('mohon maap error pak');
//     }
//     console.log('mantap')
//   })
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('removed')
//   })
// }

// deleting files
if (fs.existsSync('./docs/tes2.txt')) {
  console.log('exest')
  fs.unlink('./docs/tes2.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}




