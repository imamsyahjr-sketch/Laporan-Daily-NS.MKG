const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggleBtn = document.getElementById("toggleBtn");



/* SIDEBAR */
toggleBtn.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
};
overlay.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};

/* THEME */
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
}

themeToggle.onchange = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
};

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;
setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3500);

// GALERI MODAL
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// ====== TANGGAL BERJALAN ======
const dateElement = document.getElementById("currentDate");
const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};
dateElement.textContent = today.toLocaleDateString("id-ID", options);

// ====== DATA DUMMY (SIAP BACKEND) ======
const chartData = {
  setting: {
    day: {
      labels: Array.from({ length: 1 }, (_, i) => `Capaian`),
      target: Array(1).fill(35000),
      actual: [
        12000,15000]
    },
    month: {
      labels: Array.from({ length: 30 }, (_, i) => `Tgl ${i + 1}`),
      target: Array(30).fill(35000),
      actual: [
        12000,15000,18000,20000,22000,25000,30000,
        28000,26000,24000,23000,22000,21000,20000
      ]
    },
    year: {
      labels: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],
      target: Array(12).fill(700000),
      actual: [120000,180000,250000,300000,360000,420000]
    }
  },

  bst: {
    day: {
      labels: ["Target", "Actual"],
      target: [30000],
      actual: [30000]
    },
    month: {
      labels: Array.from({ length: 30 }, (_, i) => `Tgl ${i + 1}`),
      target: Array(30).fill(30000),
      actual: [15000,18000,20000,22000,25000,28000,30000]
    },
    year: {
      labels: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],
      target: Array(12).fill(500000),
      actual: [100000,150000,220000,280000,330000]
    }
  },

  delivery: {
    day: {
      labels: ["Target", "Actual"],
      target: [25000],
      actual: [12000]
    },
    month: {
      labels: Array.from({ length: 30 }, (_, i) => `Tgl ${i + 1}`),
      target: Array(30).fill(25000),
      actual: [9000,11000,13000,15000,17000,19000,21000]
    },
    year: {
      labels: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],
      target: Array(12).fill(500000),
      actual: [80000,120000,160000,200000,250000]
    }
  }
};

// ====== INIT CHART ======
const ctx = document.getElementById("targetActualChart").getContext("2d");
let chart;


function renderChart(process, range) {
    const data = chartData[process][range];

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: [
            {
            label: "Actual",
            data: data.actual,
            backgroundColor: "#def153",
            barThickness: 28,
            borderSkipped: false
          },
          {
            label: "Target",
            data: data.target,
            backgroundColor: "#3b82f6",
            barThickness: 28,
            borderSkipped: false
            
          }
          
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          tooltip: { mode: "index", intersect: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }



// ====== DEFAULT LOAD ======
renderChart("setting", "day");

// ====== EVENT LISTENER ======
document.getElementById("processSelect").addEventListener("change", () => {
  renderChart(
    processSelect.value,
    rangeSelect.value
  );
});

document.getElementById("rangeSelect").addEventListener("change", () => {
  renderChart(
    processSelect.value,
    rangeSelect.value
  );
});