# Weather

These are examples from the [Exploring Data tutorial](https://vega.github.io/vega-lite/tutorials/getting_started.html).

---

Let’s use a tick mark to show the distribution of precipitation.

<div id='tick'></div>

To better see the distribution of precipitation data, we can create a histogram.

<div id='histogram'></div>

Let’s look at how precipitation in Seattle changes throughout the year.

<div id='month'></div>

Let's aggregate by year and month (yearmonth) rather than just month. This allows us to see seasonal trends but for each year separately.

<div id='yearmonth'></div>

Is maximum temperature increasing from year to year? Let’s create a chart that shows the mean of the maximum daily temperatures.

<div id='temp-by-year'></div>

What about the variability of the temperatures changes throughout the year?

<div id='variability'></div>

We might wish to know how different kinds of weather (e.g. sunny days or rainy days) are distributed throughout the year.

<div id='weather-types'></div>

We can further tune the chart by providing a color scale range that maps the values from the weather field to meaningful colors (e.g. sun should be yellow, not green). In addition, we can customize the axis and legend titles.

<div id='weather-types-color'></div>
