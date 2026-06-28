const data = [
  { country: "India", life: 70, pop: 1400, health: 65 },
  { country: "USA", life: 77, pop: 331, health: 78 },
  { country: "UK", life: 81, pop: 67, health: 82 },
  { country: "Japan", life: 84, pop: 125, health: 90 },
  { country: "Germany", life: 82, pop: 83, health: 88 },
  { country: "France", life: 82, pop: 65, health: 85 },
  { country: "Canada", life: 83, pop: 38, health: 87 }
];

let chart;

// -------------------------
// INIT DROPDOWN
// -------------------------
window.onload = function () {
  let c1 = document.getElementById("country1");
  let c2 = document.getElementById("country2");

  data.forEach(c => {
    c1.innerHTML += `<option value="${c.country}">${c.country}</option>`;
    c2.innerHTML += `<option value="${c.country}">${c.country}</option>`;
  });
};

// -------------------------
// SEARCH SECTION
// -------------------------
function searchCountry() {
  let name = document.getElementById("searchInput").value.toLowerCase();

  let result = data.find(c => c.country.toLowerCase() === name);

  let box = document.getElementById("searchResult");

  if (!result) {
    box.innerHTML = "<p>❌ Country not found</p>";
    return;
  }

  box.innerHTML = `
    <h3>${result.country}</h3>
    <p>🌡 Life Expectancy: ${result.life}</p>
    <p>👥 Population: ${result.pop}M</p>
    <p>💊 Health Index: ${result.health}</p>
  `;
}

// -------------------------
// COMPARE SECTION
// -------------------------
function compare() {
  let a = document.getElementById("country1").value;
  let b = document.getElementById("country2").value;

  let c1 = data.find(c => c.country === a);
  let c2 = data.find(c => c.country === b);

  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: ["Life", "Population", "Health"],
      datasets: [
        {
          label: c1.country,
          data: [c1.life, c1.pop, c1.health],
          backgroundColor: "#38bdf8"
        },
        {
          label: c2.country,
          data: [c2.life, c2.pop, c2.health],
          backgroundColor: "#22c55e"
        }
      ]
    }
  });
}
