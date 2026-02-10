const ctx = document.getElementById("targetActualChart");

const dataDummy = {
  setting: {
    day: { labels: ["Target","Actual"], target: [35000], actual: [30000] },
    month: { labels: ["Week 1","Week 2","Week 3","Week 4"], target: [140000,140000,140000,140000], actual: [120000,130000,110000,150000] },
    year: { labels: ["Jan","Feb","Mar","Apr"], target: [700000,700000,700000,700000], actual: [600000,650000,720000,680000] }
  }
};

let chart;

function renderChart(process, range) {
  const d = dataDummy[process][range];
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Harian"],
datasets: [
  {
    label: "Target",
    data: [35000]
  },
  {
    label: "Actual",
    data: [30000]
  }

]

    }
  });
}

renderChart("setting","day");

document.getElementById("processSelect").onchange =
document.getElementById("rangeSelect").onchange = () => {
  renderChart(
    processSelect.value,
    rangeSelect.value
  );
};
