let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './scripts/main.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'main.dist.js'
    },
    watch: true
}
