const num = [1, 2, -3, 4, -5, 6, -7, 8, -9];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > 5) {
        break;
    }
    console.log(element);
}
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > 0) {
        continue;
    }
    console.log(element);
}

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element < 0) {
        continue;
    }
    console.log(element);
}