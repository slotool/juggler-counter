const SETTINGS = [1, 2, 3, 4, 5, 6];
const STORAGE_KEY = "jugglerCounter.v1";

const machines = [
  {
    id: "im",
    name: "アイムジャグラーEX",
    note: "REGと設定6のみ優遇のブドウを重視。",
    spec: [
      { s: 1, big: 273.1, reg: 439.8, grape: 6.02, payout: 97.0 },
      { s: 2, big: 269.7, reg: 399.6, grape: 6.02, payout: 98.0 },
      { s: 3, big: 269.7, reg: 331.0, grape: 6.02, payout: 99.5 },
      { s: 4, big: 259.0, reg: 315.1, grape: 6.02, payout: 101.1 },
      { s: 5, big: 259.0, reg: 255.0, grape: 6.02, payout: 103.3 },
      { s: 6, big: 255.0, reg: 255.0, grape: 5.78, payout: 105.5 },
    ],
  },
  {
    id: "my5",
    name: "マイジャグラーV",
    note: "高設定ほどREGとブドウが素直に上がる王道型。",
    spec: [
      { s: 1, big: 273.1, reg: 409.6, grape: 5.91, payout: 97.0 },
      { s: 2, big: 270.8, reg: 385.5, grape: 5.87, payout: 98.0 },
      { s: 3, big: 268.6, reg: 336.1, grape: 5.83, payout: 99.9 },
      { s: 4, big: 256.0, reg: 290.0, grape: 5.80, payout: 102.8 },
      { s: 5, big: 251.1, reg: 268.6, grape: 5.76, payout: 105.3 },
      { s: 6, big: 229.1, reg: 229.1, grape: 5.67, payout: 109.4 },
    ],
  },
  {
    id: "funky2",
    name: "ファンキージャグラー2",
    note: "設定6はBIG・REG・ブドウが強い。",
    spec: [
      { s: 1, big: 266.4, reg: 439.8, grape: 5.94, payout: 97.0 },
      { s: 2, big: 259.0, reg: 407.1, grape: 5.92, payout: 98.5 },
      { s: 3, big: 256.0, reg: 366.1, grape: 5.88, payout: 99.8 },
      { s: 4, big: 249.2, reg: 322.8, grape: 5.83, payout: 102.0 },
      { s: 5, big: 240.1, reg: 299.3, grape: 5.76, payout: 104.3 },
      { s: 6, big: 219.9, reg: 262.1, grape: 5.67, payout: 109.0 },
    ],
  },
  {
    id: "happy3",
    name: "ハッピージャグラーV III",
    note: "REG、ブドウ、チェリー重複を複合で見るタイプ。",
    spec: [
      { s: 1, big: 273.1, reg: 397.2, grape: 6.04, payout: 97.0 },
      { s: 2, big: 270.8, reg: 362.1, grape: 6.01, payout: 98.1 },
      { s: 3, big: 263.2, reg: 332.7, grape: 5.98, payout: 99.9 },
      { s: 4, big: 254.0, reg: 300.6, grape: 5.84, payout: 102.9 },
      { s: 5, big: 239.2, reg: 273.1, grape: 5.81, payout: 105.8 },
      { s: 6, big: 226.0, reg: 256.0, grape: 5.79, payout: 108.4 },
    ],
  },
  {
    id: "gogo3",
    name: "ゴーゴージャグラー3",
    note: "REG差が大きく、ブドウも段階的。",
    spec: [
      { s: 1, big: 259.0, reg: 354.2, grape: 6.25, payout: 97.2 },
      { s: 2, big: 258.0, reg: 332.7, grape: 6.20, payout: 98.2 },
      { s: 3, big: 257.0, reg: 306.2, grape: 6.15, payout: 99.4 },
      { s: 4, big: 254.0, reg: 268.6, grape: 6.07, payout: 101.6 },
      { s: 5, big: 247.3, reg: 247.3, grape: 6.00, payout: 103.8 },
      { s: 6, big: 234.9, reg: 234.9, grape: 5.92, payout: 106.5 },
    ],
  },
  {
    id: "girls",
    name: "ジャグラーガールズSS",
    note: "BIG寄り。ブドウは実戦値ベースの参考反映。",
    grapeWeight: 0.45,
    spec: [
      { s: 1, big: 273.1, reg: 381.0, grape: 6.20, payout: 97.0 },
      { s: 2, big: 270.8, reg: 350.5, grape: 6.12, payout: 97.9 },
      { s: 3, big: 260.1, reg: 316.6, grape: 6.04, payout: 99.9 },
      { s: 4, big: 250.1, reg: 281.3, grape: 5.97, payout: 102.1 },
      { s: 5, big: 243.6, reg: 270.8, grape: 5.90, payout: 104.0 },
      { s: 6, big: 226.0, reg: 252.1, grape: 5.80, payout: 107.5 },
    ],
  },
  {
    id: "mr",
    name: "ミスタージャグラー",
    note: "設定6でBIGとREGが同確率。ブドウは参考。",
    grapeWeight: 0.55,
    spec: [
      { s: 1, big: 268.6, reg: 374.5, grape: 6.29, payout: 97.0 },
      { s: 2, big: 267.5, reg: 354.2, grape: 6.22, payout: 98.0 },
      { s: 3, big: 260.1, reg: 331.0, grape: 6.15, payout: 99.8 },
      { s: 4, big: 249.2, reg: 291.3, grape: 6.09, payout: 102.7 },
      { s: 5, big: 240.9, reg: 257.0, grape: 6.02, payout: 105.5 },
      { s: 6, big: 237.4, reg: 237.4, grape: 5.96, payout: 107.3 },
    ],
  },
  {
    id: "um",
    name: "ウルトラミラクルジャグラー",
    note: "BIG偏向型。判別はREGと合算を中心に見る。",
    grapeWeight: 0.35,
    spec: [
      { s: 1, big: 267.5, reg: 425.6, grape: 5.93, payout: 97.0 },
      { s: 2, big: 261.1, reg: 402.1, grape: 5.93, payout: 98.1 },
      { s: 3, big: 256.0, reg: 350.5, grape: 5.93, payout: 99.8 },
      { s: 4, big: 242.7, reg: 322.8, grape: 5.93, payout: 102.1 },
      { s: 5, big: 233.2, reg: 297.9, grape: 5.87, payout: 104.5 },
      { s: 6, big: 216.3, reg: 277.7, grape: 5.81, payout: 108.1 },
    ],
  },
];

const detailRates = {
  im: {
    singleBig: [389.2, 381.5, 381.5, 370.0, 370.0, 361.7],
    singleReg: [630.2, 574.9, 474.9, 448.9, 364.1, 364.1],
    cherryBig: [915.8, 920.0, 920.0, 863.2, 863.2, 851.1],
    cherryReg: [1456.4, 1310.7, 1092.3, 1057.0, 851.1, 851.1],
  },
  my5: {
    singleBig: [420.1, 414.8, 404.5, 376.6, 348.6, 341.3],
    singleReg: [655.4, 595.8, 496.5, 404.5, 390.1, 352.3],
    cherryBig: [1365.3, 1365.3, 1365.3, 1365.3, 1337.5, 1129.9],
    cherryReg: [1092.3, 1092.3, 1040.3, 1024.0, 862.3, 762.1],
  },
  funky2: {
    singleBig: [404.5, 397.2, 394.8, 383.3, 374.5, 334.4],
    singleReg: [630.2, 585.1, 512.0, 448.9, 404.5, 352.3],
    cherryBig: [1424.7, 1365.3, 1365.3, 1365.3, 1285.0, 1260.3],
    cherryReg: [1456.4, 1337.5, 1285.0, 1149.8, 1149.8, 1024.0],
  },
  happy3: {
    singleBig: [436.9, 431.2, 412.2, 414.8, 376.6, 344.9],
    singleReg: [636.3, 569.9, 532.8, 478.4, 436.9, 425.6],
    cherryBig: [1489.5, 1489.5, 1489.5, 1213.6, 1213.6, 1213.6],
    cherryReg: [1057.0, 993.0, 885.6, 809.1, 728.2, 642.5],
  },
  mr: {
    singleBig: [354.0, 353.0, 342.0, 330.0, 320.0, 314.0],
    singleReg: [517.0, 481.0, 447.0, 384.0, 329.0, 299.0],
    cherryBig: [1689.0, 1682.0, 1655.0, 1508.0, 1410.0, 1385.0],
    cherryReg: [1621.0, 1600.0, 1503.0, 1412.0, 1357.0, 1331.0],
  },
};

const factorGuides = {
  im: [
    ["単独REG", "最重要", "設定1と5・6で約1.7倍。アイムはREG系を強く見る。", "singleReg"],
    ["チェリー+REG", "重要", "単独REGに次ぐ設定差。REGの中身を分けられるほど精度が上がる。", "cherryReg"],
    ["ブドウ", "設定6確認", "1〜5はほぼ同一で、設定6だけ優遇。", "grape"],
  ],
  my5: [
    ["単独REG", "最重要", "設定1と6で約1.9倍。マイジャグVの中心判別要素。", "singleReg"],
    ["チェリー+REG", "重要", "高設定域、とくに5・6確認の補助に強い。", "cherryReg"],
    ["ブドウ", "重要", "段階的に優遇。長時間ほど信頼度が上がる。", "grape"],
  ],
  funky2: [
    ["単独REG", "最重要", "設定1と6で約1.8倍。ファンキー2の主軸。", "singleReg"],
    ["ブドウ", "重要", "設定6ほど落ちやすく、サンプルを取りやすい。", "grape"],
    ["チェリー+REG", "補助", "分母は重いが高設定ほど出やすい。", "cherryReg"],
  ],
  happy3: [
    ["チェリー+REG", "最重要", "高設定ほどチェリー重複、とくにREGが強くなる。", "cherryReg"],
    ["ブドウ", "重要", "設定1〜3と4〜6の境目を見る補助になる。", "grape"],
    ["単独REG", "補助", "段階差はあるが、チェリー重複と合わせて見る。", "singleReg"],
  ],
  gogo3: [
    ["REG確率", "最重要", "設定差が大きく、合算よりREGの向きが大事。", "reg"],
    ["ブドウ", "重要", "段階的に優遇。5000G以上で根拠が強くなる。", "grape"],
    ["合算", "補助", "REGとブドウが伴う時に信頼度が上がる。", "total"],
  ],
  girls: [
    ["REG確率", "最重要", "BIG寄り機種だが、判別はREGと合算が中心。", "reg"],
    ["ブドウ", "参考", "実戦値ベースのため判別重みは控えめ。", "grape"],
    ["チェリー重複", "参考", "カウントできる場合は補助材料にする。", "cherryReg"],
  ],
  mr: [
    ["単独REG", "最重要", "高設定ほど段階的に優遇。設定6はBIG/REG比も強い。", "singleReg"],
    ["REG確率", "重要", "設定6でBIGとREGが同確率になる。", "reg"],
    ["ブドウ", "参考", "差は小さめなので補助扱い。", "grape"],
  ],
  um: [
    ["合算", "最重要", "BIG偏向型で、ボーナス合算の良さを重視。", "total"],
    ["REG確率", "重要", "BIGよりREGの設定差を意識。", "reg"],
    ["ブドウ", "参考", "設定5・6のみ優遇傾向。判別重みは控えめ。", "grape"],
  ],
};

machines.forEach((machine) => {
  const rates = detailRates[machine.id];
  if (!rates) return;
  machine.spec.forEach((row, index) => {
    Object.keys(rates).forEach((key) => {
      row[key] = rates[key][index];
    });
  });
});

const ids = ["games", "big", "reg", "grape", "cherry", "singleBig", "singleReg", "cherryBig", "cherryReg", "pierrot", "bell"];
const els = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));
const machineSelect = document.getElementById("machineSelect");
const machineNote = document.getElementById("machineNote");

let state = loadState();

function loadState() {
  const fallback = { machineId: "im", counts: Object.fromEntries(ids.map((id) => [id, 0])) };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  state.counts = Object.fromEntries(ids.map((id) => [id, toNum(els[id].value)]));
  state.machineId = machineSelect.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function toNum(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

function currentMachine() {
  return machines.find((m) => m.id === machineSelect.value) || machines[0];
}

function totalRate(big, reg) {
  return 1 / (1 / big + 1 / reg);
}

function rateText(games, count) {
  if (!games || !count) return "--";
  return `1/${(games / count).toFixed(1)}`;
}

function poissonLog(k, lambda) {
  if (lambda <= 0) return -Infinity;
  if (k === 0) return -lambda;
  return k * Math.log(lambda) - lambda;
}

function getProbabilities(machine, counts) {
  const games = counts.games;
  if (!games) return SETTINGS.map((s) => ({ s, p: 1 / 6 }));

  const grapeWeight = machine.grapeWeight ?? 1;
  const hasDetails = counts.singleBig || counts.singleReg || counts.cherryBig || counts.cherryReg;
  const logScores = machine.spec.map((row) => {
    let score = 0;
    score += poissonLog(counts.big, games / row.big) * (hasDetails ? 0.65 : 1);
    score += poissonLog(counts.reg, games / row.reg) * (hasDetails ? 0.72 : 1.08);
    if (counts.grape && row.grape) {
      score += poissonLog(counts.grape, games / row.grape) * grapeWeight;
    }
    score += detailScore(counts, row, games);
    return { s: row.s, log: score };
  });

  const max = Math.max(...logScores.map((r) => r.log));
  const exp = logScores.map((r) => ({ s: r.s, raw: Math.exp(r.log - max) }));
  const sum = exp.reduce((acc, r) => acc + r.raw, 0) || 1;
  return exp.map((r) => ({ s: r.s, p: r.raw / sum }));
}

function detailScore(counts, row, games) {
  const detailWeights = {
    singleBig: 0.75,
    singleReg: 1.35,
    cherryBig: 0.55,
    cherryReg: 1.05,
  };
  return Object.entries(detailWeights).reduce((score, [key, weight]) => {
    if (!counts[key] || !row[key]) return score;
    return score + poissonLog(counts[key], games / row[key]) * weight;
  }, 0);
}

function updateMachineOptions() {
  machineSelect.innerHTML = machines
    .map((machine) => `<option value="${machine.id}">${machine.name}</option>`)
    .join("");
  machineSelect.value = state.machineId || "im";
}

function hydrateInputs() {
  ids.forEach((id) => {
    els[id].value = state.counts?.[id] ?? 0;
  });
}

function updateRates(counts) {
  document.getElementById("totalRate").textContent = rateText(counts.games, counts.big + counts.reg);
  document.getElementById("bigRate").textContent = rateText(counts.games, counts.big);
  document.getElementById("regRate").textContent = rateText(counts.games, counts.reg);
  document.getElementById("grapeRate").textContent = rateText(counts.games, counts.grape);
  document.getElementById("cherryRate").textContent = rateText(counts.games, counts.cherry);
  document.getElementById("singleBigRate").textContent = rateText(counts.games, counts.singleBig);
  document.getElementById("singleRegRate").textContent = rateText(counts.games, counts.singleReg);
  document.getElementById("cherryBigRate").textContent = rateText(counts.games, counts.cherryBig);
  document.getElementById("cherryRegRate").textContent = rateText(counts.games, counts.cherryReg);
  document.getElementById("pierrotRate").textContent = rateText(counts.games, counts.pierrot);
  document.getElementById("bellRate").textContent = rateText(counts.games, counts.bell);
  document.getElementById("grapeMetric").textContent = rateText(counts.games, counts.grape);
}

function updateJudge(machine, counts) {
  const probabilities = getProbabilities(machine, counts);
  const best = [...probabilities].sort((a, b) => b.p - a.p)[0];
  const confidence = Math.round(best.p * 100);
  const samplePower = Math.min(100, Math.round((counts.games / 5000) * 100));

  document.getElementById("bestSetting").textContent = counts.games ? best.s : "--";
  document.getElementById("confidenceLabel").textContent = counts.games
    ? `期待度 ${confidence}% / 信頼度 ${samplePower}%`
    : "データ待ち";
  document.getElementById("sampleBadge").textContent = `${counts.games.toLocaleString()}G`;
  document.getElementById("judgeHint").textContent = counts.games < 2000
    ? "2000G未満はブレが大きめです。REGとブドウを増やすほど判別が安定します。"
    : "REG、合算、ブドウの向きがそろうほど高設定の根拠が強くなります。";

  document.getElementById("probList").innerHTML = probabilities
    .map((row) => {
      const pct = Math.round(row.p * 100);
      return `
        <div class="prob-row">
          <strong>設定${row.s}</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.max(3, pct)}%"></div></div>
          <span>${pct}%</span>
        </div>
      `;
    })
    .join("");
}

function updateSpec(machine) {
  machineNote.textContent = machine.note;
  document.getElementById("specBody").innerHTML = machine.spec
    .map((row) => `
      <tr>
        <td>設定${row.s}</td>
        <td>1/${row.big.toFixed(1)}</td>
        <td>1/${row.reg.toFixed(1)}</td>
        <td>1/${totalRate(row.big, row.reg).toFixed(1)}</td>
        <td>${row.grape ? `1/${row.grape.toFixed(2)}` : "--"}</td>
        <td>${row.payout.toFixed(1)}%</td>
      </tr>
    `)
    .join("");
  updateFactors(machine);
}

function updateFactors(machine) {
  const guides = factorGuides[machine.id] || [];
  document.getElementById("factorList").innerHTML = guides
    .map(([label, rank, text, key]) => {
      const values = machine.spec
        .map((row) => {
          const value = factorValue(row, key);
          return `<span><b>設定${row.s}</b>${value}</span>`;
        })
        .join("");
      return `
        <article class="factor-card">
          <div class="factor-title">
            <strong>${label}</strong>
            <span class="factor-rank">${rank}</span>
          </div>
          <p>${text}</p>
          <div class="factor-values">${values}</div>
        </article>
      `;
    })
    .join("");
}

function factorValue(row, key) {
  if (key === "total") return `1/${totalRate(row.big, row.reg).toFixed(1)}`;
  if (key === "big") return `1/${row.big.toFixed(1)}`;
  if (key === "reg") return `1/${row.reg.toFixed(1)}`;
  if (key === "grape" && row.grape) return `1/${row.grape.toFixed(2)}`;
  if (row[key]) return `1/${row[key].toFixed(1)}`;
  return "参考";
}

function render() {
  const machine = currentMachine();
  const counts = Object.fromEntries(ids.map((id) => [id, toNum(els[id].value)]));
  updateRates(counts);
  updateJudge(machine, counts);
  updateSpec(machine);
  saveState();
}

function bump(id, step) {
  const current = toNum(els[id].value);
  els[id].value = Math.max(0, current + step);
  render();
}

document.querySelectorAll("[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    bump(button.dataset.target, Number(button.dataset.step));
  });
});

document.querySelectorAll("input, select").forEach((input) => {
  input.addEventListener("input", render);
  input.addEventListener("change", render);
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".tab-page").forEach((page) => page.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.getElementById(`${tab.dataset.tab}Page`).classList.add("is-active");
  });
});

document.getElementById("resetCounts").addEventListener("click", () => {
  ["grape", "cherry", "singleBig", "singleReg", "cherryBig", "cherryReg", "pierrot", "bell"].forEach((id) => {
    els[id].value = 0;
  });
  render();
});

document.getElementById("resetAll").addEventListener("click", () => {
  ids.forEach((id) => {
    els[id].value = 0;
  });
  render();
});

document.getElementById("saveMemo").addEventListener("click", (event) => {
  saveState();
  event.currentTarget.textContent = "保存済み";
  window.setTimeout(() => {
    event.currentTarget.textContent = "保存";
  }, 900);
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

updateMachineOptions();
hydrateInputs();
render();
