//This config file has to be at the root of the folder for webpack to find it.
const path = require('path')

module.exports = {
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname,'public'),      // This path for the output needs to be an absolute path.
        filename:'bundle.js'
    },
    module:{   // This module in the webpack config files allows use to set the rules for the loader. In this case to run babel to convert JSX to javascript.
        rules:[{ 
            loader:'babel-loader',
            test:/\.js$/, // This is a reg expression to run all js files through babel.
            exclude: /node_modules/
        }, {
            test:/\.s?css$/, // Question mark ensures webpack targets both scss or css files
            use:[               //use takes in an array of loaders.
                'style-loader', // Helps to put the css-javascript on the DOM
                'css-loader',   //Tells webpack to load in the css files.
                'sass-loader'   //Helps to load the sass files.
            ]
        }]
    },
    devtool:'cheap-eval-module-source-map',
    devServer: {
        contentBase:path.join(__dirname,'public'),
        historyApiFallback: true
    }
};