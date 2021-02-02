// double equal comparison value is equal 
const first=1;
const second=true;
if(first==second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

const first=1;
const second="1";
if(first==second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

const first=1;
const second=false;
if(first==second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

const first=0;
const second=false;
if(first==second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

// triple equal always check type with value 
const first=1;
const second=true;
if(first==second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

const first=0;
const second=false;
if(first===second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

const first=1;
const second=1;
if(first===second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}

const first=1;
const second="1";
if(first===second){
    console.log("Condition is true");
}else{
    console.log('Condition is false');
}