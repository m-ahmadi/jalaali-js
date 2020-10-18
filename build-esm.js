const fs = require('fs');
const { execSync }  = require('child_process');
process.env.path += require('path').delimiter + './node_modules/.bin';

if (!fs.existsSync('dist')) fs.mkdirSync('dist');

const babel = require('@babel/core');
const src = fs.readFileSync('./index.js', 'utf8');
const { code } = babel.transform(src, {plugins: ['transform-commonjs-es2015-modules']});
fs.writeFileSync('dist/jalaali.esm.js', code);
execSync('terser dist/jalaali.esm.js -c -m -o dist/jalaali.esm.min.js');