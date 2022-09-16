
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyWebpack = require('copy-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',

    output : {
        clean:true,
        filename:'main.[contenthash].js'
    },

    module:{
        //exportacion de los diferntes archivos definidos como reglas. 
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources:false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use:[MiniCssExtract.loader, 'css-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader:'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    optimization: {
        minimize
        : true,
        minimizer:[
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins: [
        //propiedades de exportacion de los documentos html css 
        new HtmlWebpack({
            title: 'Mi WebPack App',
            //filename: 'index.html', (opcional)
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename:'[name].[fullhash].css',
            
        }),
        new CopyWebpack({
            patterns:[
                {from:'src/assets/',to:'assets/'}
            ]
        })
    ],
}