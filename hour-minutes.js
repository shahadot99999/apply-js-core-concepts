// write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

function hoursconvertMinutes(hours) {
    const minutes = hours * 60;
    const second = hours * 60 * 60
    return minutes + ":" + second;
}

const minutes = hoursconvertMinutes(5);
console.log('totall minute: second', minutes);

