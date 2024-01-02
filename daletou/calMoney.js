function getWinCount(winNums, checkNums) {
    const wBefore5 = winNums.slice(0, 5)
    const wAfter2 = winNums.slice(5)
    const cBefore5 = checkNums.slice(0, 5)
    const cAfter2 = checkNums.slice(5)
    function calCount(wArr, cArr) {
        let count = 0
        cArr.forEach(item => {
            if (wArr.indexOf(item) > -1) {
                count += 1
            }
        })
        return count
    }

    const beforeCount = calCount(wBefore5, cBefore5)
    const afterCount = calCount(wAfter2, cAfter2)

    return {
        beforeCount,
        afterCount
    }
}

function calMoney(winNums, checkNums) {
    const { beforeCount, afterCount } = getWinCount(winNums, checkNums)

    const isPrize1 = beforeCount === 5 && afterCount === 2
    const isPrize2 = beforeCount === 5 && afterCount === 1
    const isPrize3 = beforeCount === 5 && afterCount === 0
    const isPrize4 = beforeCount === 4 && afterCount === 2
    const isPrize5 = beforeCount === 4 && afterCount === 1
    const isPrize6 = beforeCount === 3 && afterCount === 2
    const isPrize7 = beforeCount === 4 && afterCount === 0
    const isPrize8 = (beforeCount === 3 && afterCount === 1) || (beforeCount === 2 && afterCount === 2)
    const isPrize9 = (beforeCount === 3 && afterCount === 0) || (beforeCount === 2 && afterCount === 1) || (beforeCount === 1 && afterCount === 2) || (beforeCount === 0 && afterCount === 2)

    if (isPrize1) {
        console.log(`一等奖！！！，中奖号码为${checkNums}`);
        return 10000000
    }

    if (isPrize2) {
        return 150000
    }

    if (isPrize3) {
        return 10000
    }

    if (isPrize4) {
        return 3000
    }

    if (isPrize5) {
        return 300
    }

    if (isPrize6) {
        return 200
    }

    if (isPrize7) {
        return 100
    }

    if (isPrize8) {
        return 15
    }

    if (isPrize9) {
        return 5
    }

    return 0
}

const money = calMoney(['25', '16', '27', '31', '34', '01', '11'], ['22', '13', '23', '31', '33', '01', '10'])

module.exports = {
    getWinCount,
    calMoney
}