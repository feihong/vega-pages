module.exports = {
  data: {
    values: require('./data.json')
  },
  mark: 'bar',
  encoding: {
    y: {field: 'a', type: 'nominal'},
    x: {aggregate: 'average', field: 'b', type: 'quantitative'}
  }
}
