function createSummator() {
    let totalSum = 0;
    return function (number) {
        return totalSum += number;
    }
};
const getSum = createSummator();
console.log(getSum(3));
console.log(getSum(5));
console.log(getSum(20));