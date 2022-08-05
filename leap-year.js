//Write a function findLeapYear() that will take array [2023, 2024, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. It a year is aleap year insert that year in new array, return the new array and print the result.

function findLeapYear(numbers) {
    const leapyear = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 4 === 0) {
            console.log(index, element);
            leapyear.push(element);
        }
    }
    return leapyear;

}

const myYear = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const leapyear = findLeapYear(myYear);
