const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {
    const files =[
        './dist/ngRxElementsDemo/runtime-es2015.js',
        './dist/ngRxElementsDemo/polyfills-es2015.js',
        './dist/ngRxElementsDemo/main-es2015.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/ngRxElementsDemo.js')
    console.info('Angular Elements created successfully!')

})()