const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const { Template } = require('webpack');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    // mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({template:'index.html'}),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        // port: '8868',
        // historyApiFallback: {index: 'index.html'},
        // hot: true,
        // publicPath: publicPath,
        // contentBase: path.resolve(__dirname, buildPath),
        // publicPath: publicPath, //添加
        inline: true, //添加
        hot: true,
        proxy: {
            '/manage/**': {
                target: 'http://admintest.happymmall.com',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            },
            '/user/**': {
                target: 'http://admintest.happymmall.com',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env', 'react', "stage-0"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //             },
            //         },
            //     ],
            // },
            { 
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
            
        ]
    }
};