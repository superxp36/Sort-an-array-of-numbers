const numberList = [74, 22, 42, 4, 18, 27];

numberList.sort(compareFunction);

console.log(numberList);

function compareFunction(a,b) {

    return a - b;
}