var QRCode = require('qrcode')
// var canvas = document.querySelectorAll('canvas')

// for (c of canvas) {

//     QRCode.toCanvas(c, 'sample text', function (error) {
//         if (error) console.error(error)
//         console.log('success!');
//     })    
// }




// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//   console.log(url)
// })

QRCode.toFile('filename.png', 'Some text', {
    width: "1000",
    color: {
      dark: '#303030',  // Blue dots
      light: '#fff' // Transparent background
    },
  }, function (err) {
    if (err) throw err
    console.log('done')
  })