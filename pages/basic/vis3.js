module.exports = {
  data: {
    values: require('./data.json')
  },
  mark: 'bar',
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {aggregate: 'average', field: 'b', type: 'quantitative'}
  }
}
