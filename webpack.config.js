
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {  
//     entry: path.join(__dirname,'src','index.js'),  
//     output: {    path: path.join(__dirname,'build'),    
//     filename: 'index.bundle.js'  },  
//     mode: process.env.NODE_ENV || 'development',  
//     resolve: {    modules: [path.resolve(__dirname, 'src'), 'node_modules']  },  
//     devServer: {    contentBase: path.join(__dirname,'src')  },  
//     module:{
//         rules:[{
//             loader: 'babel-loader',
//             test: '/\.(js|jsx)$/',
//             exclude: /node_modules/
//         }]
//     },
//     plugins: [    
//         new HtmlWebpackPlugin({      template: path.join(__dirname,'public','index.html')    })  
//     ]};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ASSET_PATH = '/';
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        //contenthash will help us to same names for non changing content
        filename: 'js/[name]-[contenthash].js',
        publicPath: ASSET_PATH,
    },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:ico|gif|png|svg|jpg|jpeg)$/i,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'file-loader',
                },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        favicon: './public/favicon.ico'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
    },
};