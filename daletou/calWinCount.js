const { calMoney } = require("./calMoney");
const { generateLotto } = require("./genCode");
const { calInvestMoney } = require("./calInvest");
const data = require("./data");
var fs = require("fs");

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

// 3、追号回本策略，最多循环10次，使用出现最多的号码，将亏损18219元
// const checkArr = ['32', '30', '35', '33', '29', '10', '07']
// let lastWinIndex = 1;
// let winsum = 0;
// let investMoney = 0;

// let resArr = [];
// data.forEach((item, index) => {
//   const res = item.lotteryDrawResult;
//   const winArr = res.split(" ");
//   const winMoney = calMoney(winArr, checkArr);

//   const investObj = calInvestMoney(lastWinIndex);
//   investMoney = investObj.inputMoney;

//   let win = 0;

//   if (winMoney > 0) {
//     const multiple = winMoney / 2;
//     winsum = winsum + multiple * investMoney;
//     lastWinIndex = 0;
//     win = multiple * investMoney;
//   } else {
//     winsum = winsum - investMoney;
//     win = 0;
//   }
//   lastWinIndex++;
//   if (lastWinIndex === 11) {
//     lastWinIndex = 1;
//   }
//   resArr.push({
//     lastWinIndex,
//     winsum,
//     res,
//     win,
//   });
// });

// console.log(
//   `总期数：${data.length}，总中奖次数：${
//     resArr.filter((item) => item.win > 0).length
//   }`
// );

// fs.writeFile("./res.js", JSON.stringify(resArr), (error) => {
//   if (error) {
//     console.log(`创建失败：${error}`);
//   }

//   console.log(`创建成功！`);
// });

// 4、每期随机回本策略
// let lastWinIndex = 1;
// let winsum = 0;
// let investMoney = 0;

// let resArr = [];
// data.forEach((item, index) => {
//   const res = item.lotteryDrawResult;
//   const winArr = res.split(" ");
//   const winMoney = calMoney(winArr, generateLotto());

//   const investObj = calInvestMoney(lastWinIndex);
//   investMoney = investObj.inputMoney;

//   let win = 0;

//   if (winMoney > 0) {
//     const multiple = winMoney / 2;
//     winsum = winsum + multiple * investMoney;
//     lastWinIndex = 0;
//     win = multiple * investMoney;
//   } else {
//     winsum = winsum - investMoney;
//     win = 0;
//   }
//   lastWinIndex++;
//   if (lastWinIndex === 10) {
//     lastWinIndex = 1;
//   }
//   resArr.push({
//     lastWinIndex,
//     winsum,
//     res,
//     win,
//   });
// });

// fs.writeFile("./res.js", JSON.stringify(resArr), (error) => {
//   if (error) {
//     console.log(`创建失败：${error}`);
//   }

//   console.log(`创建成功！`);
// });
