# MapValueJs [![npm-version][npm-badge]][npm-link]


## Introduction
A simple module to map a number value in one range to another

## Installing
Using npm :
```bash 
npm install mapvaluejs
```
When the package is installed, you can use the <b>import</b> or <b>require</b> approach<br><br>
Using Import
```js
import {map} from 'mapvaluejs/src';
console.log("Mapped value : ",map(350,0,1023,0,253));
```
Using require
```js
const mapvaluejs = require('mapvaluejs/src');
console.log("Mapped value : ",mapvaluejs.map(350,0,1023,0,253));
```

## GitHub
You can access the source code of this module from [here](https://github.com/LakeeshaRCL/mapvaluejs)

## License
[MIT][mit] © [LakeeshaRCL][author]

[npm-badge]:https://badge.fury.io/js/mapvaluejs.svg
[licence-badge]:!https://img.shields.io/npm/l/mapvaluejs
[npm-link]: https://www.npmjs.com/package/mapvaluejs
[mit]:      http://opensource.org/licenses/MIT
[author]:   https://github.com/LakeeshaRCL