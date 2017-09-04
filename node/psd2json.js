/**
 * Created by Quan on 2017/8/28.
 */

const path   = require('path');
const PSD    = require('psd');
const config = require('./../project.json');

// console.log(PSD);
console.log(config);
// console.log(process.cwd());

const curPath = process.cwd();
const psdPath = path.join(curPath, config.psdPath);
const outPath = path.join(curPath, config.outPath);

console.log(psdPath);
console.log(outPath);

