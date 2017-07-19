var path = require('path');

module.exports =
{
    entry: './app/app.jsx',
    output: { path:__dirname, filename:'./public/bundle.js' },
    resolve: {
                alias:
                {
                  VideoPage: path.resolve(__dirname, 'app/components/VideoPage.js'),
                  VideoSearch: path.resolve(__dirname, 'app/components/VideoSearch.js'),
                  VideoList: path.resolve(__dirname, 'app/components/VideoList.js'),
                  VideoListItem: path.resolve(__dirname, 'app/components/VideoListItem.js'),
                  VideoDetail: path.resolve(__dirname, 'app/components/VideoDetail.js')
                },

                extensions: ['.js', '.jsx']
             },

    module:
    {
        loaders:[{

            loader:'babel-loader',

            query:{

              presets: ['react', 'es2015'],
              plugins : ["transform-class-properties"]

            },

            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]

    }
}
