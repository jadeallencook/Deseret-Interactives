const path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'newsroom.min.js'
    }
};