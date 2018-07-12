const data = {
  values: require('./data.json')
}
function embed(num, spec) {
  vegaEmbed(`#vis${num}`, spec, {defaultStyle: true}).catch(console.warn)
}

embed(1, {
  data,
  mark: 'point',
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {field: 'b', type: 'quantitative'}
  }
})

embed(2, {
  data,
  mark: 'point',
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {aggregate: 'average', field: 'b', type: 'quantitative'} // use average
  }
})

embed(3, {
  data,
  mark: 'bar',    // bar chart
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {aggregate: 'average', field: 'b', type: 'quantitative'}
  }
})

embed(4, {
  data,
  mark: 'bar',
  encoding: {
    // Swap the axes to make bar chart horizontal
    y: {field: 'a', type: 'nominal'},
    x: {aggregate: 'average', field: 'b', type: 'quantitative'}
  }
})

embed(5, {
  data,
  mark: 'bar',
  encoding: {
    y: {field: 'a', type: 'nominal'},
    x: {
      aggregate: 'average',
      field: 'b',
      type: 'quantitative',
      axis: {title: 'Average of b (very cool!!!)'},  // add title to x axis
    }
  }
})
