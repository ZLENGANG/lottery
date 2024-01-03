function getWinCount(winNums, checkNums) {
    const wRed = winNums.slice(0, 6)
    const wBlue = winNums.slice(6)
    const cRed = checkNums.slice(0, 6)
    const cBlue = checkNums.slice(6)
    function calCount(wArr, cArr) {
        let count = 0
        cArr.forEach(item => {
            if (wArr.indexOf(item) > -1) {
                count += 1
            }
        })
        return count
    }

    const beforeCount = calCount(wRed, cRed)
    const afterCount = calCount(wBlue, cBlue)

    return {
        beforeCount,
        afterCount
    }
}

function calWinMoney(winNums, checkNums) {
    const { beforeCount, afterCount } = getWinCount(winNums, checkNums)

    const isPrize1 = beforeCount === 6 && afterCount === 1
    const isPrize2 = beforeCount === 6 && afterCount === 0
    const isPrize3 = beforeCount === 5 && afterCount === 1
    const isPrize4 = (beforeCount === 5 && afterCount === 0) || (beforeCount === 4 && afterCount === 1)
    const isPrize5 = (beforeCount === 3 && afterCount === 1) || (beforeCount === 4 && afterCount === 0)
    const isPrize6 = (beforeCount === 0 && afterCount === 1) || (beforeCount === 1 && afterCount === 1) || (beforeCount === 2 && afterCount === 1)

    if (isPrize1) {
        console.log(`一等奖！！！，中奖号码为${checkNums}`);
        return 6000000
    }

    if (isPrize2) {
        return 150000
    }

    if (isPrize3) {
        return 3000
    }

    if (isPrize4) {
        return 200
    }

    if (isPrize5) {
        return 10
    }

    if (isPrize6) {
        return 5
    }


    return 0
}

const money = calWinMoney(["10", "11", "12", "13", "26", "28", "11"], ["10", "11", "12", "13", "27", "33", "11"])
module.exports = {
    getWinCount,
    calWinMoney
}