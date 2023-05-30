// Task 1
const add = (number) => {
    let sum = number;
    const addNext = (nextNumber) => {
        if (nextNumber === undefined) {
            return sum;
        }
        sum += nextNumber;
        return addNext;
    }
    return addNext;
}

console.log("Task 1: " + add(2)(5)(7)(1)(6)(5)(11)()); // Result: 37
console.log("===================================");

// Task 2
const checkIfAnagrams = (str1, str2) => {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) {
        return false;
    }
    const str1_sorted = str1.split("").sort().join("");
    const str2_sorted = str2.split("").sort().join("");
    return str1_sorted === str2_sorted;
}

console.log("Task 2.");
console.log("result 1: " + checkIfAnagrams("атлас", "салат")); // Result: true
console.log("result 2: " + checkIfAnagrams("атлас", "салют")); // Result: false
console.log("===================================");

// Task 3
const deepClone = (obj) => {
    if (typeof obj === "object" && obj !== null) {
        let newObj;
        if (Array.isArray(obj)) {
            newObj = [];
        } else {
            newObj = {};
        }
        for (let key in obj) {
            newObj[key] = deepClone(obj[key]);
        }
        return newObj;
    } else {
        return obj;
    }
}

const obj = {
    carBrand: "Toyota",
    model: "GR 86",
    horsepower: "234hp",
    engine: "2.4l"
};

console.log("Task 3.");
console.log("Default object: " + JSON.stringify(obj));
console.log("New object: " + JSON.stringify(deepClone(obj)));
console.log("===================================");

// Task 4
console.log("Task 4.");
const cache = (func) => {
    const results = {};
    return function() {
        const args = Array.prototype.slice.call(arguments).toString();
        if (results[args]) {
            console.log(results[args] + " from cache");
            return results[args];
        } else {
            const result = func.apply(this, arguments);
            results[args] = result;
            console.log(result + " calculated");
            return result;
        }
    }
}

const calc = (a, b, c) => a+b+c;
const cachedCalc = cache(calc);
cachedCalc(2,2,3);
cachedCalc(5,8,1);
cachedCalc(2,2,3);