
const getTotal = async () => {
    const response = await fetch('https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=30&isVerify=1&pageNo=1');
    const data = await response.json();
    return data.value.total;
}

const getData = async (pageNo) => {
    const response = await fetch(`https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=100&isVerify=1&pageNo=${pageNo}`);
    const data = await response.json();
    return data.value.list.map(item => {
        return {
            lotteryDrawNum: item.lotteryDrawNum,
            lotteryDrawTime: item.lotteryDrawTime,
            lotteryDrawResult: item.lotteryDrawResult,
        }
    });
}

getTotal().then(total => {
    const pageLength = Math.ceil(total / 100);
    const pArr = []

    for (let i = 1; i <= pageLength; i++) {
        pArr.push(getData(i))
    }

    Promise.all(pArr).then(res => {
        console.log(res.flat());
    })
});