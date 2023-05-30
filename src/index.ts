// Task 1
type AddFunc = (num?: number) => number | AddFunc;
const add: AddFunc = (num?: number) => {
    const addNext: AddFunc = (nextNum?: number) => {
        if (nextNum === undefined) {
            return num || 0;
        }
        return add((num || 0) + nextNum);
    };
    return addNext;
};
//@ts-ignore
console.log("Task 1: " + add(2)(5)(7)(1)(6)(5)(11)());
console.log("===================================");

// Task 2
const checkIfAnagrams = (str1: string, str2: string): boolean => {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");
    const str1_sorted = str1.split("").sort().join("");
    const str2_sorted = str2.split("").sort().join("");
    return str1_sorted === str2_sorted;
}
console.log("Task 2.");
console.log("result 1: " + checkIfAnagrams("атлас", "салат"));
console.log("result 2: " + checkIfAnagrams("атлас", "салют"));
console.log("===================================");

// Task 3
const deepClone = <T>(obj: T): T => {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        const newArray = [];
        for (const objElement of obj) {
            newArray.push(deepClone(objElement));
        }
        return newArray as unknown as T;
    }
    const newObj = {} as T;
    for (let objKey in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, objKey)) {
            newObj[objKey] = deepClone(obj[objKey]);
        }
    }
    return newObj;
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
const cacheFunc = (func: (...numbers: number[]) => number): (...numbers: number[]) => number => {
    const cache = new Map<string, number>();
    return (...numbers: number[]) => {
        const key = numbers.join(",");
        if (cache.has(key)) {
            console.log(`Result from cache:`);
            return cache.get(key) as number;
        }
        const result = func(...numbers);
        cache.set(key, result);
        console.log(`Calculated result:`);
        return result;
    };
}
const calc = (a: number, b: number, c: number): number => a + b + c;
const cachedCalc = cacheFunc(calc);
console.log("Task 4.");
console.log(cachedCalc(2, 2, 3));
console.log(cachedCalc(5,8,1));
console.log(cachedCalc(2, 2, 3));