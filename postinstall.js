const fs = require('fs');
const glob = require('glob');
let js = 'node_modules/vitepress/dist/client/app/router.js';
fs.writeFileSync(js, fs.readFileSync(js, 'utf8').replace("url.pathname += '.html';", ''))

glob('node_modules/vitepress/dist/node/serve-*.js',{},(err,files) =>{
    let file = files[0];
    fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace("cleanUrl += \".html\";",''))
})

console.log('Completed post install process...')