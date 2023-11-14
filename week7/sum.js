function calculate(first, second, ops) {
    switch (ops) {
        case "add":
            return (first + second);
        default:
            return 0;
    }
}
var result = calculate(2, 3, "add");
console.log(result);
