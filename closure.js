function stopWatch() {
    let count = 0;
    return function () {  //when any return function inside a function and main function child variable access this return function it is call closure function;
        count++;
        return count;
    }
}

const clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock());
console.log(clock2());
console.log(clock2());
console.log(clock());