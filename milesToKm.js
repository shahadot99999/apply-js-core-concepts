function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const dhaka = 144;
const dadaTotall = milesToKilometer(dhaka);
console.log(dadaTotall);