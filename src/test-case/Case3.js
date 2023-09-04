function Case3(obj) {
    let sum = 0;

    for (const key in obj) {
        if (typeof obj[key] === "object") {
            sum += Case3(obj[key]);
        } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }

    return sum;
}

export default Case3