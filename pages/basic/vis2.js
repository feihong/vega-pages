module.exports = {
  data: {
    values: require('./data.json')
  },
  mark: 'point',
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {aggregate: 'average', field: 'b', type: 'quantitative'}
  }
}
