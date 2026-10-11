const STORAGE_KEY = "plan-dijete-teretane-v1";

const dayInfo = [
  ["PD", "1.850–2.000", "Prsa, triceps i trbušnjaci"],
  ["PD", "1.850–2.000", "Leđa i biceps"],
  ["Kontrolisani UH", "2.050–2.200", "Noge i stomak"],
  ["PD", "1.850–2.000", "Ramena i ruke"],
  ["PD", "1.850–2.000", "Gornji dio tijela"],
  ["Kontrolisani UH", "2.050–2.200", "Cijelo tijelo"],
  ["PD, odmor", "1.850–2.000", "Odmor i lagana šetnja"],
  ["PD", "1.850–2.000", "Prsa, triceps i trbušnjaci"],
  ["PD", "1.850–2.000", "Leđa i biceps"],
  ["Kontrolisani UH", "2.050–2.200", "Noge i stomak"],
  ["PD", "1.850–2.000", "Ramena i ruke"],
  ["PD", "1.850–2.000", "Gornji dio tijela"],
  ["Kontrolisani UH", "2.050–2.200", "Cijelo tijelo"],
  ["PD, odmor", "1.850–2.000", "Odmor i lagana šetnja"]
];

const checkDefinitions = [
  ["breakfast", "Doručak", "Prema jelovniku"],
  ["lunch", "Ručak", "Prema jelovniku"],
  ["snack", "Užina", "Prema jelovniku"],
  ["dinner", "Večera", "Prema jelovniku"],
  ["protein", "Proteini", "180–200 g"],
  ["creatine", "Kreatin", "5 g"],
  ["whey", "Whey", "Po potrebi"],
  ["citrulline", "Citrulin malat", "Prije treninga"],
  ["betaAlanine", "Beta-alanin", "3,2 g"],
  ["psyllium", "Psyllium", "4–5 g uz vodu"],
  ["training", "Trening / odmor", "Prema rasporedu"],
  ["cardio", "Kardio / šetnja", "Prema rasporedu"]
];

const mealPlan = [
  ["3 jaja, 200 g bjelanaca, 150 g krastavca", "220 g pilećih prsa, salata, 15 g maslinovog ulja", "30 g whey, 200 g grčkog jogurta, 20 g badema", "250 g oslića, 250 g tikvica, 15 g maslinovog ulja"],
  ["3 jaja, 150 g posnog sira, 150 g krastavca", "220 g purećih prsa, 200 g špinata, 15 g maslinovog ulja", "30 g whey, 25 g badema", "250 g bijele ribe, 2 jaja, 250 g tikvica"],
  ["70 g zobi, 30 g whey, 150 g bobičastog voća", "200 g piletine, 90 g suhe riže, 200 g brokolija, 10 g ulja", "200 g grčkog jogurta, banana 120 g", "220 g oslića, 300 g krompira, salata, 10 g ulja"],
  ["3 jaja, 200 g bjelanaca, paradajz", "200 g ocijeđene tune, salata, 15 g maslinovog ulja", "30 g whey, 200 g posnog sira, 20 g oraha", "220 g piletine, 250 g tikvica, 15 g maslinovog ulja"],
  ["3 jaja, 150 g posnog sira, 150 g krastavca", "220 g nemasne junetine, 200 g mahuna, 10 g ulja", "30 g whey, 25 g badema", "250 g bijele ribe, 200 g špinata, 2 jaja"],
  ["80 g zobi, 30 g whey, banana 100 g", "200 g piletine, 90 g suhe riže, 200 g povrća, 10 g ulja", "250 g grčkog jogurta, 2 rižine galete, jabuka", "220 g puretine, 300 g krompira, salata, 10 g ulja"],
  ["3 jaja, 200 g bjelanaca, 150 g krastavca", "220 g puretine, salata, 15 g ulja", "30 g whey, 200 g posnog sira, 20 g oraha", "250 g bijele ribe, 250 g tikvica, 15 g ulja"]
];

const workouts = [
  { name: "Ponedjeljak", group: "Prsa, triceps i trbušnjaci", exercises: [["Bench press", "4 × 6–10"], ["Kosi potisak bučicama", "3 × 8–12"], ["Razvlačenje na sajlama", "3 × 12–15"], ["Triceps na sajli", "3 × 10–15"], ["Triceps iznad glave", "3 × 10–12"], ["Trbušnjaci na sajli", "3 × 12–15"], ["Kardio", "20 min"]] },
  { name: "Utorak", group: "Leđa i biceps", exercises: [["Lat pulldown", "4 × 8–12"], ["Veslanje na spravi", "4 × 8–12"], ["Sjedeće veslanje na sajli", "3 × 10–12"], ["Reverse fly", "3 × 12–15"], ["Biceps pregib", "3 × 10–12"], ["Hammer pregib", "3 × 10–12"], ["Kardio", "20 min"]] },
  { name: "Srijeda", group: "Noge i stomak", exercises: [["Čučanj ili leg press", "4 × 8–12"], ["Rumunsko mrtvo dizanje", "3 × 8–10"], ["Leg curl", "3 × 10–15"], ["Leg extension", "3 × 10–15"], ["Listovi", "4 × 12–15"], ["Plank", "3 serije"], ["Lagani kardio", "10–15 min"]] },
  { name: "Četvrtak", group: "Ramena i ruke", exercises: [["Potisak za ramena", "3 × 8–10"], ["Lateral raises", "4 × 12–15"], ["Reverse fly", "3 × 12–15"], ["Biceps pregib", "3 × 10–12"], ["Triceps na sajli", "3 × 10–12"], ["Trbušnjaci", "3 serije"], ["Kardio", "20–25 min"]] },
  { name: "Petak", group: "Gornji dio tijela", exercises: [["Kosi bench press", "3 × 8–12"], ["Lat pulldown", "3 × 8–12"], ["Veslanje na spravi", "3 × 10–12"], ["Chest press", "3 × 10–12"], ["Lateral raises", "3 × 12–15"], ["Biceps", "2–3 serije"], ["Triceps", "2–3 serije"], ["Kardio", "20 min"]] },
  { name: "Subota", group: "Cijelo tijelo", exercises: [["Leg press", "3 × 10"], ["Potisak bučicama", "3 × 10"], ["Lat pulldown", "3 × 10"], ["Rumunsko mrtvo dizanje", "3 × 10"], ["Veslanje na sajli", "3 × 12"], ["Plank", "3 serije"], ["Kardio", "15–20 min"]] },
  { name: "Nedjelja", group: "Odmor", exercises: [["Lagana šetnja", "30–45 min"], ["Ishrana prema planu", "4 obroka"], ["Kreatin", "5 g"], ["Dnevno vaganje", "Ujutro"], ["Oporavak", "Bez teškog treninga"]] }
];

const measurementDefinitions = ["Težina (kg)", "Obim struka (cm)", "Obim stomaka (cm)", "Obim prsa (cm)", "Obim nadlaktice (cm)", "Obim natkoljenice (cm)", "Prosječni koraci", "Prosječan san (h)", "Snaga na treningu", "Glad (1–10)", "Energija (1–10)"];
const weeklyDefinitions = ["Završeni treninzi", "Dani s ispoštovanom ishranom", "Dani s ciljem proteina", "Dani s ciljem koraka", "Dani s kreatinom", "Prosječna težina", "Promjena težine", "Promjena obima struka", "Prosječna energija"];

const roadmapPhases = [
  ["Temelj", "Uhodavanje ritma, tehnika i tačno praćenje", "8.000–10.000 koraka"],
  ["Ritam", "Stabilan deficit uz očuvanje snage", "9.000–11.000 koraka"],
  ["Napredak", "Postepeno povećanje opterećenja", "10.000–12.000 koraka"],
  ["Definicija", "Kontrola prosjeka i bolji oporavak", "10.000–12.000 koraka"],
  ["Završni blok", "Dolazak do cilja bez agresivnog reza", "8.000–12.000 koraka"]
];

const roadmapPlan = Array.from({ length: 20 }, (_, index) => {
  const start = new Date(2026, 9, 12 + index * 7);
  const end = new Date(2026, 9, 18 + index * 7);
  const phaseIndex = Math.floor(index / 4);
  const target = index === 19 ? 82 : Number((97 - (index + 1) * 0.75).toFixed(1));
  const formatShort = date => `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
  return {
    week: index + 1,
    dates: `${formatShort(start)}–${formatShort(end)}`,
    phase: roadmapPhases[phaseIndex][0],
    focus: roadmapPhases[phaseIndex][1],
    steps: roadmapPhases[phaseIndex][2],
    target,
    calories: "1.850–2.000 kcal PD / 2.050–2.200 kcal UH dan",
    training: index < 2 ? "6 treninga + 1 odmor, umjeren intenzitet" : "6 treninga + 1 odmor, 1–3 ponavljanja u rezervi"
  };
});

let state = loadState();

function blankChecks() {
  return Object.fromEntries(checkDefinitions.map(([key]) => [key, false]));
}

function defaultState() {
  return {
    selectedDay: 1,
    selectedWorkout: 0,
    days: Array.from({ length: 14 }, (_, i) => ({
      checks: blankChecks(), weight: "", water: "", steps: "", sleep: "", note: ""
    })),
    workouts: workouts.map(() => []),
    measurements: measurementDefinitions.map((name, i) => [name, i === 0 ? "97" : "", "", ""]),
    weekly: weeklyDefinitions.map(name => [name, "", ""])
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.days)) return defaultState();
    return saved;
  } catch (_) { return defaultState(); }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateSummary();
}

function formatDate(day) {
  return `${String(11 + day).padStart(2, "0")}.10.2026.`;
}

function selectedDayData() { return state.days[state.selectedDay - 1]; }

function dayProgress(dayData) {
  const values = checkDefinitions.map(([key]) => Boolean(dayData.checks[key]));
  return Math.round(values.filter(Boolean).length / values.length * 100);
}

function isDayComplete(dayData) { return dayProgress(dayData) === 100; }

function updateSummary() {
  const latest = [...state.days].reverse().find(day => day.weight !== "" && day.weight !== null);
  document.getElementById("currentWeightCard").textContent = latest ? `${latest.weight} kg` : "—";
  document.getElementById("completedDaysCard").textContent = `${state.days.filter(isDayComplete).length} / 14`;
}

function renderDayPicker() {
  const picker = document.getElementById("dayPicker");
  picker.innerHTML = state.days.map((day, index) => {
    const number = index + 1;
    const complete = isDayComplete(day) ? " complete" : "";
    const active = state.selectedDay === number ? " active" : "";
    return `<button class="day-btn${active}${complete}" data-day="${number}" title="${formatDate(number)}">${number}</button>`;
  }).join("");
}

function renderDaily() {
  const day = selectedDayData();
  const info = dayInfo[state.selectedDay - 1];
  document.getElementById("dailyHeading").textContent = `Dan ${state.selectedDay} · ${formatDate(state.selectedDay)}`;
  document.getElementById("dayMeta").innerHTML = `<span class="meta-pill">${info[0]}</span><span class="meta-pill">${info[1]} kcal</span><span class="meta-pill">${info[2]}</span>`;

  const progress = dayProgress(day);
  document.getElementById("dailyProgressLabel").textContent = `${progress}%`;
  document.getElementById("dailyProgressFill").style.width = `${progress}%`;
  document.getElementById("dailyChecks").innerHTML = checkDefinitions.map(([key, label, target]) => {
    const checked = Boolean(day.checks[key]);
    return `<label class="check-row${checked ? " done" : ""}"><input type="checkbox" data-check="${key}" ${checked ? "checked" : ""}><span class="check-copy"><strong>${label}</strong><small>${target}</small></span></label>`;
  }).join("");

  document.getElementById("weightInput").value = day.weight ?? "";
  document.getElementById("waterInput").value = day.water ?? "";
  document.getElementById("stepsInput").value = day.steps ?? "";
  document.getElementById("sleepInput").value = day.sleep ?? "";
  document.getElementById("noteInput").value = day.note ?? "";
}

function renderMeals() {
  document.getElementById("mealList").innerHTML = Array.from({ length: 7 }, (_, index) => {
    const day = index + 1;
    const meal = mealPlan[index % 7];
    const regime = dayInfo[index][0];
    return `<article class="meal-card"><div class="meal-card-top"><h3>Dan ${day} · ${formatDate(day)}</h3><span class="meta-pill">${regime}</span></div><div class="meal-row"><strong>08:00</strong><span>${meal[0]}</span></div><div class="meal-row"><strong>12:30</strong><span>${meal[1]}</span></div><div class="meal-row"><strong>16:00</strong><span>${meal[2]}</span></div><div class="meal-row"><strong>19:00</strong><span>${meal[3]}</span></div></article>`;
  }).join("");
}

function renderRoadmap() {
  document.getElementById("roadmapList").innerHTML = roadmapPlan.map(item => `<article class="roadmap-card"><div class="roadmap-top"><div><span class="roadmap-week">Sedmica ${item.week}</span><h3>${item.phase}</h3></div><strong>${item.target} kg</strong></div><p class="roadmap-date">${item.dates}</p><p>${item.focus}</p><div class="roadmap-details"><span><b>Kalorije</b>${item.calories}</span><span><b>Kretanje</b>${item.steps}</span><span><b>Trening</b>${item.training}</span></div></article>`).join("");
}

function renderWorkoutSelect() {
  const select = document.getElementById("workoutDaySelect");
  select.innerHTML = workouts.map((workout, index) => `<option value="${index}">${workout.name}</option>`).join("");
  select.value = String(state.selectedWorkout);
}

function renderWorkout() {
  const workout = workouts[state.selectedWorkout];
  const completed = state.workouts[state.selectedWorkout] || [];
  document.getElementById("workoutHeading").textContent = `${workout.name} · ${workout.group}`;
  document.getElementById("workoutGroup").textContent = workout.group;
  const progress = Math.round(completed.length / workout.exercises.length * 100);
  document.getElementById("workoutProgressLabel").textContent = `${progress}%`;
  document.getElementById("workoutProgressFill").style.width = `${progress}%`;
  document.getElementById("workoutList").innerHTML = workout.exercises.map(([name, plan], index) => {
    const done = completed.includes(index);
    return `<label class="workout-row${done ? " done" : ""}"><input type="checkbox" data-exercise="${index}" ${done ? "checked" : ""}><span>${name}</span><small>${plan}</small></label>`;
  }).join("");
}

function renderMeasurements() {
  document.getElementById("measurementRows").innerHTML = state.measurements.map((row, rowIndex) => `<tr><td>${row[0]}</td>${[1, 2, 3].map(col => `<td><input data-measure-row="${rowIndex}" data-measure-col="${col}" value="${escapeHtml(row[col] ?? "")}" placeholder="—"></td>`).join("")}</tr>`).join("");
  document.getElementById("weeklyRows").innerHTML = state.weekly.map((row, rowIndex) => `<tr><td>${row[0]}</td><td><input data-weekly-row="${rowIndex}" data-weekly-col="1" value="${escapeHtml(row[1] ?? "")}" placeholder="—"></td><td><input data-weekly-row="${rowIndex}" data-weekly-col="2" value="${escapeHtml(row[2] ?? "")}" placeholder="—"></td></tr>`).join("");
}

function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character])); }

function renderAll() {
  renderDayPicker();
  renderDaily();
  renderRoadmap();
  renderMeals();
  renderWorkoutSelect();
  renderWorkout();
  renderMeasurements();
  updateSummary();
}

document.querySelectorAll(".tab").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.toggle("active", tab === button));
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.toggle("active", panel.id === `${button.dataset.tab}-panel`));
}));

document.getElementById("dayPicker").addEventListener("click", event => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  state.selectedDay = Number(button.dataset.day);
  saveState();
  renderDayPicker();
  renderDaily();
});

document.getElementById("dailyChecks").addEventListener("change", event => {
  if (!event.target.matches("[data-check]")) return;
  selectedDayData().checks[event.target.dataset.check] = event.target.checked;
  saveState();
  renderDayPicker();
  renderDaily();
});

const fieldMap = { weightInput: "weight", waterInput: "water", stepsInput: "steps", sleepInput: "sleep", noteInput: "note" };
Object.entries(fieldMap).forEach(([id, key]) => document.getElementById(id).addEventListener("input", event => {
  selectedDayData()[key] = event.target.value;
  saveState();
  if (key === "weight") updateSummary();
}));

document.getElementById("workoutDaySelect").addEventListener("change", event => {
  state.selectedWorkout = Number(event.target.value);
  saveState();
  renderWorkout();
});

document.getElementById("workoutList").addEventListener("change", event => {
  if (!event.target.matches("[data-exercise]")) return;
  const index = Number(event.target.dataset.exercise);
  const completed = new Set(state.workouts[state.selectedWorkout] || []);
  event.target.checked ? completed.add(index) : completed.delete(index);
  state.workouts[state.selectedWorkout] = [...completed].sort((a, b) => a - b);
  saveState();
  renderWorkout();
});

document.getElementById("measurementRows").addEventListener("input", event => {
  if (!event.target.matches("[data-measure-row]")) return;
  state.measurements[Number(event.target.dataset.measureRow)][Number(event.target.dataset.measureCol)] = event.target.value;
  saveState();
});

document.getElementById("weeklyRows").addEventListener("input", event => {
  if (!event.target.matches("[data-weekly-row]")) return;
  state.weekly[Number(event.target.dataset.weeklyRow)][Number(event.target.dataset.weeklyCol)] = event.target.value;
  saveState();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "plan-dijete-teretane-backup.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.getElementById("importInput").addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported.days || !imported.measurements) throw new Error("invalid");
      state = imported;
      saveState();
      renderAll();
      alert("Podaci su uspješno uvezeni.");
    } catch (_) { alert("Ovaj fajl nije ispravna rezervna kopija aplikacije."); }
    event.target.value = "";
  };
  reader.readAsText(file);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Obrisati sva lokalna praćenja i vratiti praznu tabelu?")) return;
  state = defaultState();
  saveState();
  renderAll();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

renderAll();
