function calInvestMoney(count, multiple) {
    if (count === 1) {
        return {
            count,
            inputMoney: 2,
            sum: 2,
            earnMoney: 3,
        };
    }

    let inputMoney = 2;

    let sum = 4;

    let i = count - 2;

    while (i > 0) {
        inputMoney = inputMoney + 2;

        if (sum + inputMoney <= 2.5 * inputMoney) {
            sum = sum + inputMoney;

            i--;
        }
    }

    return {
        count,
        inputMoney,
        sum,
        earnMoney: inputMoney * 2.5 - sum,
    };
}

for (let i = 0; i < 20; i++) {
    console.log(calInvestMoney(i + 1));
}


module.exports = {
    calInvestMoney
}