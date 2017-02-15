var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable (data) {
  const table = document.createElement('TABLE');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  Object.keys(data[0]).forEach((key, i) => {
    const cell = headerRow.insertCell(i);
    cell.innerHTML = key;
  });
  data.forEach((element) => {
    const row = table.insertRow(table.rows.length);
    Object.keys(element).forEach((key, i) => {
      const cell = row.insertCell(i);
      cell.innerHTML = element[key];
    });
  });
  return table;
};

document.body.appendChild(buildTable(MOUNTAINS));
