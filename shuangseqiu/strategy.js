const data = require("./data");
const { calWinMoney } = require("./calWinMoney");

// 1、追号策略，每次投一注
// 此号码为出现次数最多的号码，此号码在全部的3096期中，一共中奖236次，最多追了68次，总投入金额为6192，总共中奖金额为1975，平均追的次数为13.033898305084746
// const checkArr = ["26", "14", "01", "22", "32", "06", "01"];
const checkArr = ["05", "25", "19", "22", "30", "11", "01"];

let lastWinIndex = 1;
let arr = [];
let winsum = 0;

data.forEach((item, index) => {
  const money = calWinMoney(item.nums, checkArr);
  if (money > 0) {
    console.log(`追了${lastWinIndex}次，中奖金额为${money}`);
    arr.push(lastWinIndex);
    lastWinIndex = 1;
    winsum += money;
  } else {
    lastWinIndex++;
  }
});
const maxCount = arr.sort((a, b) => Number(a) - Number(b))[arr.length - 1];
console.log(
  `此号码在全部的${data.length}期中，一共中奖${
    arr.length
  }次，最多追了${maxCount}次，总投入金额为${
    data.length * 2
  }，总共中奖金额为${winsum}，平均追的次数为${arr.reduce((a, b) => a + b, 0) / arr.length}`
);
