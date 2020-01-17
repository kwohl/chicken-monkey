for (let number=1; number <= 100; number++) {
    if (number % 5 === 0 && number % 7 === 0) {
        console.log("ChickenMonkey");
    } else if (number % 5 === 0) {
        console.log("Chicken");
    } else if (number % 7 === 0) {
        console.log("Monkey");
    } else {
        console.log(number);
    }
}