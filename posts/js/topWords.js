const labels = ['man', 'love', 'time', 'money', 'baby', 'life', 'give', 'real', 'gotta', 'girl', 'feel', 'big', 'good', 'day', 'call', 'black', 'bout', 'god', 'run', 'head'];
const data = [8243, 7897, 7104, 6229, 5645, 5185, 4833, 4745, 4698, 4087, 4044, 3741, 3556, 3433, 3407, 3128, 3098, 3079, 3029, 2995];
const topWords = document.getElementById('top-words').getContext('2d');
const topWordsChart = new Chart(topWords, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Top 20',
      data: data,
      backgroundColor: 'rgba(159, 164, 196, 1)',
      borderColor: 'rgba(159, 164, 196, 1)',
      borderWidth: 4,
      borderRadius: 8
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Top 20 Palavras',
        font: {
          size: 20
        }
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 10,
          font: {
            weight: 600
          }
        },
        grid: {
          display: true
        }
      },
      y: {
        ticks: {
          font: {
            weight: 600
          }
        },
        grid: {
          display: true
        }
      }
    }
  }
});
