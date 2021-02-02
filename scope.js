let num3 = 20; //global scope
var num4 = 30; //global flexible scope

function scope(num1, num2) {
    const result = num1 + num2 + num3; // when let const declared inside a function it's local variable;
    if(result>25){
        let see="Happy Day"; // when let const variable are declared if block or for block when it is block variable;
        return see;
    }
    return result;
}
const output=scope(2,2);
console.log(output);
