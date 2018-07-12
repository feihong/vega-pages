const path = require('path')
const glob = require('glob')

pagesDir = './pages/'

// Use all index.js files under pages/ as being entry points
const entries =
  glob.sync(pagesDir + '**/index.js')
    .reduce((acc, path_) => {
      let name = path_.substring(pagesDir.length, path_.length - 9)
      return {...acc, [name]: path_}
    }, {})

console.log('Entries:', entries)

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
}
