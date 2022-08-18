const dataDistributionLabels = ["1980's", "1990's", "2000's", "2010's"];

const dataFromDataDistribution = [
  [234, null, null, null],
  [null, 1360, null, null],
  [null, null, 1092, null],
  [null, null, null, 3056]
];

const backgroundColors = [
  'rgba(31, 60, 125, 0.8)',
  'rgba(79, 53, 155, 0.8)',
  'rgba(39, 251, 107, 0.8)',
  'rgba(255, 159, 64, 0.8)'
];

const borderColors = [
  'rgba(31, 60, 125, 1)',
  'rgba(79, 53, 155, 1)',
  'rgba(39, 251, 107, 1)',
  'rgba(255, 159, 64, 1)'
];

let dataDistributionDatasets = [];
dataDistributionLabels.forEach((element, index) => {
  let d = {
    label: element,
    data: dataFromDataDistribution[index],
    backgroundColor: backgroundColors[index],
    borderColor: borderColors[index]
  }
  dataDistributionDatasets.push(d);
});

const dataDistribution = document.getElementById('data-distribution').getContext('2d');
const dataDistributionChart = new Chart(dataDistribution, {
  type: 'bar',
  data: {
    labels: dataDistributionLabels,
    datasets: dataDistributionDatasets
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Quantidade de Músicas por Década',
        font: {
          size: 20
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
        grid: {
          display: true
        }
      }
    }
  }
});