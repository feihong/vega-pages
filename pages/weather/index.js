const dataUrl = '/data/seattle-weather.csv'
function embed(selector, spec) {
  vegaEmbed(selector, spec, {defaultStyle: true}).catch(console.warn)
}

embed('#tick', {
  "data": {"url": dataUrl},
  "mark": "tick",
  "encoding": {
    "x": {"field": "precipitation", "type": "quantitative"}
  }
})

embed('#histogram', {
  "data": {"url": dataUrl},
  "mark": "bar",
  "encoding": {
    "x": {
      "bin": true,              // discretize temperature values
      "field": "precipitation",
      "type": "quantitative"
      },
    "y": {
      "aggregate": "count",
      "field": "*",
      "type": "quantitative"
    }
  }
})

embed('#month', {
  "data": {"url": dataUrl},
  "mark": "line",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      // Vega-Lite natively supports dates and discretization of dates when we
      // set the type to temporal
      "type": "temporal"
    },
    "y": {
      "aggregate": "mean",
      "field": "precipitation",
      "type": "quantitative"
    }
  }
})

embed('#yearmonth', {
  "data": {"url": dataUrl},
  "mark": "line",
  "encoding": {
    "x": {
      "timeUnit": "yearmonth",
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "aggregate": "max",  // see the maximum temperature in each month
      "field": "temp_max",
      "type": "quantitative"
    }
  }
})

embed('#temp-by-year', {
  "data": {"url": dataUrl},
  "mark": "line",
  "encoding": {
    "x": {
      "timeUnit": "year",
      "field": "date",
      "type": "temporal",
    },
    "y": {
      "aggregate": "mean",
      "field": "temp_max",
      "type": "quantitative",
      axis: {title: 'Mean of max daily temp'}
    }
  }
})

embed('#variability', {
  "data": {"url": dataUrl},
  "transform": [
    // Define a new field temp_range that is the difference between max and min
    // daily temperatures
    {
      calculate: "datum.temp_max - datum.temp_min",
      as: "temp_range"
    }
  ],
  "mark": "line",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "aggregate": "mean",
      "field": "temp_range",
      "type": "quantitative",
      axis: {title: 'Mean of (max - min)'}
    }
  }
})

embed('#weather-types', {
  "data": {"url": dataUrl},
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      "type": "ordinal"
    },
    "y": {
      "aggregate": "count",
      "field": "*",
      "type": "quantitative"
    },
    // When a field is mapped to color for a bar mark, Vega-Lite automatically
    // stacks the bars atop each other.
    "color": {
      "field": "weather",
      "type": "nominal"
    }
  }
})

embed('#weather-types-color', {
  "data": {"url": dataUrl},
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      "type": "ordinal",
      "axis": {"title": "Month of the year"}
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative",
      axis: {title: 'Number of instances'}
    },
    "color": {
      "field": "weather",
      "type": "nominal",
      "scale": {
        "domain": ["sun","fog","drizzle","rain","snow"],
        "range": ["#e7ba52","#c7c7c7","#aec7e8","#1f77b4","#9467bd"]
      },
      "legend": {"title": "Weather type"}
    }
  }
})
