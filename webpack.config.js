var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery','window.jQuery':'jquery'});
module.exports = {
    entry: {
        toDoList: './src/js/DatePicker.js'
    },
    output: {
        path : './static/dist/',
        publicPath: 'http://localhost:8080/static/dist/',
        filename: '[name].js'
    },
     module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader', 
                    exclude: /node_modules/, 
                    query: { 
                         presets: ['react', 'es2015']
                        }
                 },
                 {
                     test: /\.css$/,
                     loader: 'style-loader!css-loader'
                 },
                 {
                     test: /\.(png|jpg)$/,
                     loader: 'url-loader?limit=8192'
                 },
                 {
                     test: /\.less$/, 
                     loader: 'style-loader!css-loader!less-loader'
                 }
            ]
            
        },
        resolve: {
                extensions: ['', '.js', '.json', 'less', 'css']
            },
        plugins: [providePlugin] 
}