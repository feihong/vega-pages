module.exports = {
  data: {
    values: require('./data.json')
  },
  mark: 'point',
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {field: 'b', type: 'quantitative'}
  }
}
