const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};
const square = (num) => {
    return num * num;
};
const add = (a, b) => {
    return a + b;
};
