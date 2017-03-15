module.exports = {
    entry: './app.client.js',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|app.server.js)/,
                loader: 'babel-loader',
                query: {
                    presets:['react']
                }
            }
        ]
    }
}
// module.exports =
// {
//     exclude: /node_modules/,
//     loader: "babel",
//     query: {
//         presets:['react']
//     }
// }
