const path = require("path");
module.exports = {
    entry:{
        hello:"./packages/hello/src/index.js",
        log:"./packages/log/src/index.js",
        test:"./packages/test/src/index.js"
    },
    mode:"development",
    output:{
        path:path.join(__dirname,"./lib"),
        filename:"[name].js",
        libraryTarget:"umd",
        globalObject:"this",
        library:"sg-com-lib",
        libraryExport:'default'
    }
}