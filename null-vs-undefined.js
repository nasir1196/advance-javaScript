// undefined 
let premik;
console.log(premik);

function add(num1, num2) {
    console.log(num1 + num2);
}
const result = add(12, 34);
console.log(result);


function add(num1, num2) {
    console.log(num1 + num2);
}
const result = add(12);
console.log(result);

function add(num1, num2) {
    console.log(num1 + num2);
    return
}
const result = add(12, 2);
console.log(result);

function add(num1, num2) {
    console.log(num2);
    return
}
const result = add(12);
console.log(result);

const ageList = { age: 34, name: "abib", phone: 01254744, };
console.log(ageList.address);

const age = [56, 35, 43, 53];
console.log(age[5]);