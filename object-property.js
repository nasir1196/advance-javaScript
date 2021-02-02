const students = [
    { id: 21, name: "Alu" },
    { id: 22, name: "Potol" },
    { id: 23, name: "Jinga" },
    { id: 34, name: "shosha" }
];
const names = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const newElement = element.name;
    names.push(newElement);
}
console.log(names);

const names2 = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const newElement = element.id;
    names2.push(newElement);
}
console.log(names2);

const names3 = students.map(s => s.name);
console.log(names3);

const ids = students.map(s => s.id);
console.log(ids);

const ids2 = students.filter(s => s.id > 22);
console.log(ids2);

const ids3 = students.find(s => s.id > 22);
console.log(ids3);