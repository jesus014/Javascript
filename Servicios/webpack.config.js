
const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    output : {
        clean:true,
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
            }
        ]
    },
    optimization: {},

    plugins: [
        //propiedades de exportacion de los documentos html css 
        new HtmlWebpack({
            title: 'Mi WebPack App',
            //filename: 'index.html', (opcional)
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename:'[name].css',
            
        }),
        new CopyWebpack({
            patterns:[
                {from:'src/assets/',to:'assets/'}
            ]
        })
    ],
}