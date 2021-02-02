const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numSlice = num.slice(1, 4);
console.log(numSlice);

const removed = num.splice(1, 6, 51, 52, 53, 54, 55, 56);
console.log(removed);
console.log(num);

const addArray = num.join(" how, ");
console.log(addArray);

