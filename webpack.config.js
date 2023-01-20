const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    plugins: [
        /** шаблон html, куда подключаем скрипты и стили */
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        /** очистка dist */
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
                // стили
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { // картинки
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
            { // шрифты
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },

}