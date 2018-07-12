const n = 5
for (let i=1; i <= n; i++) {
  let name = `vis${i}`
  vegaEmbed('#' + name, require('./' + name), {defaultStyle: true})
    .catch(console.warn)
}
