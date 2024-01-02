const data = require('./data')
const before5Arr = []
const after2Arr = []

data.forEach(item => {
    const res = item.lotteryDrawResult
    const before5 = res.substring(0, 14)
    const after2 = res.substr(-5)
    before5Arr.push(before5)
    after2Arr.push(after2)
})


function statistics(arr) {
    let obj = {}
    arr.forEach(item => {
        const arr1 = item.split(' ')
        arr1.forEach(cItem => {
            if (!obj[cItem]) {
                obj[cItem] = 1
            } else {
                obj[cItem] = obj[cItem] + 1
            }
        })
    })

    const sortObj = {}
    var sortedObjKeys = Object.keys(obj).sort(function (a, b) {
        return obj[b] - obj[a]
    });

    for (var i = 0; i < sortedObjKeys.length; i++) {
        sortObj[sortedObjKeys[i] + '_'] = `${obj[sortedObjKeys[i]]}-${((obj[sortedObjKeys[i]] / (data.length * (arr[0].split(' ').length))) * 100).toFixed(2)}%`
    }

    return sortObj
}

console.log(statistics(before5Arr));
console.log(statistics(after2Arr));

