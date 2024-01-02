const { calMoney } = require('./calMoney')
const { generateLotto } = require('./genCode')
const { calInvestMoney } = require('./calInvest')
const data = require('./data')


// 1、追号策略，每次投一注
// 此号码为出现次数最多的号码，此号码在全部的2516期中，一共中奖256次，最多追了56次，总投入金额为5032，总共中奖金额为3135
// const checkArr = ['32', '30', '35', '33', '29', '10', '07']
// let lastWinIndex = 1
// let arr = []
// let winsum = 0

// data.forEach((item, index) => {
//     const res = item.lotteryDrawResult
//     const winArr = res.split(' ')
//     const money = calMoney(winArr, checkArr)
//     if (money > 0) {
//         console.log(`追了${lastWinIndex}次，中奖金额为${money}`);
//         arr.push(lastWinIndex)
//         lastWinIndex = 1
//         winsum += money
//     } else {
//         lastWinIndex++
//     }
// })

// const maxCount = arr.sort((a, b) => Number(a) - Number(b))[arr.length - 1]
// console.log(`此号码在全部的${data.length}期中，一共中奖${arr.length}次，最多追了${maxCount}次，总投入金额为${data.length * 2}，总共中奖金额为${winsum}`);

// 2、每次都机选一注，在全部的2516期中，总投入金额为5032，，平均中奖1600
// const all = []
// for (let i = 0; i < 10000; i++) {
//     let winsum = 0
//     let earnMoneyArr = []
//     data.forEach((item, index) => {
//         const res = item.lotteryDrawResult
//         const winArr = res.split(' ')
//         const money = calMoney(winArr, generateLotto())
//         if (money > 0) {
//             winsum += money
//             earnMoneyArr.push(money)
//         }
//     })
//     all.push(winsum)
// }

// console.log(all.sort((a, b) => b - a));
// console.log(`总共${all.filter(item => item >= 5000).length}次中奖金额大于5000`);
// console.log(`平均中奖金额为${all.reduce((a, b) => a + b) / all.length}`);


// 3、追号回本策略
const checkArr = ['32', '30', '35', '33', '29', '10', '07']
let lastWinIndex = 1
let winsum = 0
let investMoney = 0
let investSum = 0

const data1 = [{
    "lotteryDrawNum": "07001",
    "lotteryDrawTime": "2007-05-30",
    "lotteryDrawResult": "22 24 29 31 35 04 11"
},
{
    "lotteryDrawNum": "07002",
    "lotteryDrawTime": "2007-06-02",
    "lotteryDrawResult": "15 22 31 34 35 05 12"
},
{
    "lotteryDrawNum": "07003",
    "lotteryDrawTime": "2007-06-04",
    "lotteryDrawResult": "03 04 18 23 32 01 06"
},
{
    "lotteryDrawNum": "07004",
    "lotteryDrawTime": "2007-06-06",
    "lotteryDrawResult": "06 10 16 17 25 02 04"
},
{
    "lotteryDrawNum": "07005",
    "lotteryDrawTime": "2007-06-09",
    "lotteryDrawResult": "01 09 19 20 30 02 11"
},
{
    "lotteryDrawNum": "07006",
    "lotteryDrawTime": "2007-06-11",
    "lotteryDrawResult": "01 16 20 23 28 03 06"
},
{
    "lotteryDrawNum": "07007",
    "lotteryDrawTime": "2007-06-13",
    "lotteryDrawResult": "14 16 25 26 35 04 09"
},
{
    "lotteryDrawNum": "07008",
    "lotteryDrawTime": "2007-06-16",
    "lotteryDrawResult": "29 30 31 32 33 10 07"
},
{
    "lotteryDrawNum": "07009",
    "lotteryDrawTime": "2007-06-18",
    "lotteryDrawResult": "01 03 09 19 34 09 12"
},
{
    "lotteryDrawNum": "07010",
    "lotteryDrawTime": "2007-06-20",
    "lotteryDrawResult": "06 08 18 29 34 09 11"
},
{
    "lotteryDrawNum": "07008",
    "lotteryDrawTime": "2007-06-16",
    "lotteryDrawResult": "02 08 11 21 23 04 07"
},
{
    "lotteryDrawNum": "07009",
    "lotteryDrawTime": "2007-06-18",
    "lotteryDrawResult": "01 03 09 19 34 09 12"
},
{
    "lotteryDrawNum": "07010",
    "lotteryDrawTime": "2007-06-20",
    "lotteryDrawResult": "06 08 18 29 34 09 11"
},
{
    "lotteryDrawNum": "07008",
    "lotteryDrawTime": "2007-06-16",
    "lotteryDrawResult": "02 08 11 21 23 04 07"
},
{
    "lotteryDrawNum": "07009",
    "lotteryDrawTime": "2007-06-18",
    "lotteryDrawResult": "01 03 09 19 34 09 12"
},
{
    "lotteryDrawNum": "07010",
    "lotteryDrawTime": "2007-06-20",
    "lotteryDrawResult": "06 08 18 29 34 09 11"
},
]

data1.forEach((item, index) => {
    const res = item.lotteryDrawResult
    const winArr = res.split(' ')
    const winMoney = calMoney(winArr, checkArr)

    const investObj = calInvestMoney(lastWinIndex)
    investSum = investObj.sum
    investMoney = investObj.inputMoney

    if (winMoney > 0) {
        const multiple = winMoney / 2
        winsum = winsum + multiple * investMoney - investSum
        lastWinIndex = 0
    } else {
        winsum = winsum - investMoney
        // lastWinIndex++
    }
    lastWinIndex++
    if (lastWinIndex === 10) {
        lastWinIndex = 1
    }
    console.log(lastWinIndex, winsum, res);

})
console.log(winsum);
