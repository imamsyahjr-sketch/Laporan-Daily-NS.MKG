const dateElement = document.getElementById("currentDate");

const today = new Date();
dateElement.textContent = today.toLocaleDateString("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});
