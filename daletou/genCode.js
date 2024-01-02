function generateDoubleColorLottery() {
    var numbers = [];

    for (var i = 0; i < 6; i++) {
        var number = Math.ceil(Math.random() * 33);

        while (numbers.includes(number)) {
            number = Math.ceil(Math.random() * 33);
        }

        numbers.push(number);
    }

    var redArr = numbers
        .sort((a, b) => a - b)
        .map((item) => (item < 10 ? '0' + item : item) + '');

    const blue = Math.ceil(Math.random() * 16);

    return [...redArr, (blue < 10 ? '0' + blue : blue) + ''];
}

// 大乐透
function generateLotto() {
    var before = [];

    let after = [];

    for (var i = 0; i < 5; i++) {
        var number = Math.ceil(Math.random() * 35);

        while (before.includes(number)) {
            number = Math.ceil(Math.random() * 35);
        }

        before.push(number);
    }

    for (var i = 0; i < 2; i++) {
        var number = Math.ceil(Math.random() * 12);

        while (after.includes(number)) {
            number = Math.ceil(Math.random() * 12);
        }

        after.push(number);
    }

    before = before
        .sort((a, b) => a - b)
        .map((item) => (item < 10 ? '0' + item : item) + '');

    after = after
        .sort((a, b) => a - b)
        .map((item) => (item < 10 ? '0' + item : item) + '');

    return [...before, ...after];
}


module.exports = {
    generateLotto,
    generateDoubleColorLottery,
}