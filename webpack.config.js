const path = require('path');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js'
    },
    plugins: [
        new WebpackDeepScopeAnalysisPlugin(),
    ],
}