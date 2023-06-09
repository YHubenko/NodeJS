# Практичне завдання до теми 2 (JS)

## Завдання 1
Функція add викликає функцію addNext(), при виклику з послідовністю елементів, кожен раз додаючи аргумент до суми, до тих пір, поки не буде передано жодного аргументу: тоді функція addNext() поверну результат.
> console.log(add(2)(5)(7)(1)(6)(5)(11)()); // Result: 37

В результаті виконання роботи отримаємо повідомлення у консолі "37".

## Завдання 2
Спочатку функція checkIfAnagrams() переводить усі символи в отриманих рядках у нижній регістр та прибирає пробіли між словами. Далі спрацьовує перевірка на те, щоб довжини вже модифікованих рядків співпадали, адже, якщо рядки мають різну кількість символів, вони не можуть бути анаграмами. Якщо довжини рядків рівні, ми сортуємо модифіковані рядки, та, якщо масиви однакові, повертаємо true, а якщо різні - false.
> console.log(checkIfAnagrams("атлас", "салат")); // true

> console.log(checkIfAnagrams("атлас", "салют")); // false

## Завдання 3
Перш за все, функція deepClone() перевіряє переданий їй параметр на те, чи є він об'єктом або масивом. Якщо параметр відповідає умові, то ми створюємо новий об'єкт/масив та, за допомогою рекурсії, записуємо в новий об'єкт/масив переданий параметр, перебераючи його елементи циклом. Якщо ж параметр не є масивом чи об'єктом, функція просто його повертає.
> console.log(JSON.stringify(obj));

> console.log(JSON.stringify(deepClone(obj)));

## Завдання 4
Функція cache() приймає в параметри функцію, результат якої треба кешувати, та повертає функцію, яка в свою чергу буде кешувати результати, якщо їх ще немає в кеші та повертати результат з кешу, якщо він там вже є.
> const calc = (a, b, c) => a+b+c; <br>
const cachedCalc = cache(calc); <br>
cachedCalc(2,2,3); <br>
cachedCalc(5,8,1); <br>
cachedCalc(2,2,3);