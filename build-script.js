const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {
    const files =[
        './dist/ngRxElementsDemo/runtime-es2015.js',
        './dist/ngRxElementsDemo/polyfills-es2015.js',
        './dist/ngRxElementsDemo/main-es2015.js'
    ]
    
    await fs.ensureDir('elements')
    await fs.ensureDir('elements/assets/css');

    await concat(files, 'elements/ngRxElementsDemo.js')
    await fs.copyFile('./src/styles.scss', 'elements/assets/css/styles.scss');
    await fs.copyFile('./dist/ngRxElementsDemo/styles.css', 'elements/assets/css/styles.css' )
    console.info('Angular Elements created successfully!')

})()

// (async function build() {
//   const files = [
//     './dist/ngRxElementsDemo/runtime-es2015.js',
//     './dist/ngRxElementsDemo/polyfills-es2015.js',
//     './dist/ngRxElementsDemo/main-es2015.js'
//   ];

//   await fs.ensureDir('elements');
//   await fs.ensureDir('elements/assets/scripts');
//   await fs.ensureDir('elements/assets/css');

//   await concat(files, 'elements/elements.js')
//   await fs.copyFile('elements/elements.js', 'dist/elements/elements.js');

//   await fs.copyFile('./src/scss/styles.scss', 'elements/assets/css/styles.scss');
//   await fs.copyFile('./dist/ngRxElementsDemo/styles.css', 'elements/assets/css/styles.css' )

// })();