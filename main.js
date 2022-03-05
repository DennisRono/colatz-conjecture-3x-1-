//const ctx = document.getElementById('myChart').getContext('2d');
const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = Samples.utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
      });
      chart.update();
    }
  },
  {
    name: 'Add Data',
    handler(chart) {
      const data = chart.data;
      if (data.datasets.length > 0) {
        data.labels.push('data #' + (data.labels.length + 1));

        for (var index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Samples.utils.rand(0, 100));
        }

        chart.update();
      }
    }
  },
  {
    name: 'Remove Data',
    handler(chart) {
      chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach(dataset => {
        dataset.data.pop();
      });

      chart.update();
    }
  }
];
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
const thedata = Samples.utils.numbers(NUMBER_CFG);
const labels = thedata.map(function(e){return e.toString()});
const data = {
  labels: labels,
  datasets: [
    {
      label: '3x+1',
      data: thedata,
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
      backgroundColor: [
        Samples.utils.transparentize(255, 99, 132, 0.5),
        Samples.utils.transparentize(255, 159, 64, 0.5),
        Samples.utils.transparentize(255, 205, 86, 0.5),
        Samples.utils.transparentize(75, 192, 192, 0.5),
        Samples.utils.transparentize(54, 162, 235, 0.5),
      ]
    },
    {
        label: '3x+1',
        data: Samples.utils.numbers(NUMBER_CFG),
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: [
          Samples.utils.transparentize(255, 99, 132, 0.5),
          Samples.utils.transparentize(255, 159, 64, 0.5),
          Samples.utils.transparentize(255, 205, 86, 0.5),
          Samples.utils.transparentize(75, 192, 192, 0.5),
          Samples.utils.transparentize(54, 162, 235, 0.5),
        ]
    },
    {
        label: '3x+1',
        data: Samples.utils.numbers(NUMBER_CFG),
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: [
          Samples.utils.transparentize(255, 99, 132, 0.5),
          Samples.utils.transparentize(255, 159, 64, 0.5),
          Samples.utils.transparentize(255, 205, 86, 0.5),
          Samples.utils.transparentize(75, 192, 192, 0.5),
          Samples.utils.transparentize(54, 162, 235, 0.5),
        ]
    }
  ]
};
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart'
      }
    }
  },
};
var myChart = new Chart( document.getElementById('myChart'), config, data, actions );