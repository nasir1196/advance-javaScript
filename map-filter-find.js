const numbers = [3, 4, 5, 6, 7, 8, 9];
const output=[];

for(let i=0; i<numbers.length;i++){
    const element=numbers[i];
    const square=element*element;
    output.push(square);
}
console.log(output);

const mapResult = numbers.map(function (element) {
    const result = element * element;
    return result;
})
console.log(mapResult);

const mapArrow = numbers.map(x => x * x);
console.log(mapArrow);

// map function
function mapNumber(element) {
    return element * element;
}
const mapResult2 = numbers.map(mapNumber);
console.log(mapResult2);

const filterNumber = numbers.filter(x => x);
console.log(filterNumber);

const filterNumber2 = numbers.filter(x => x < 6);
console.log(filterNumber2);

const findNumber1 = numbers.find(x => x < 6);
console.log(findNumber1);
const findNumber2 = numbers.find(x => x > 6);
console.log(findNumber2);
const findNumber3 = numbers.find(x => x > 3);
console.log(findNumber3);