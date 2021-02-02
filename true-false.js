//Falsy:
//false
//undefined
//null
//0
//""
//NaN

//truthy:
//" ", "0", [], {}, true
const names = '0'; //truthy value;
const names = 0; //falsy value;
if (names) {
    console.log("Truthy value");
} else {
    console.log("Falsy Value");
}