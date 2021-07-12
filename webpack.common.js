const path = require('path');
module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        path:path.join(__dirname,"./lib"),
        filename:"sg-com-lib.common.js",
        libraryTarget:'commonjs2',
        globalObject:"this",
        libraryExport:"default"
    }
};