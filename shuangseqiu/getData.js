// http://kaijiang.zhcw.com/zhcw/html/ssq/list.html
// http://kaijiang.zhcw.com/zhcw/html/ssq/list_2.html
const superagent = require("superagent");
const cheerio = require("cheerio");
const fs = require("fs");
const { resolve } = require("path");

function getPage() {
  return new Promise((resolve) => {
    superagent
      .get("http://kaijiang.zhcw.com/zhcw/html/ssq/list.html")
      .end((err, data) => {
        if (err) return console.log("爬取页面失败1");
        const $ = cheerio.load(data.text);
        const pageTotal = $(".pg").find("strong")[0].children[0].data;
        // resolve(1);
        resolve(pageTotal);
      });
  });
}
const allData = [];
function getData(pageNum) {
  const resData = [];
  console.log(`当前页面为：${pageNum}`);
  superagent
    .get(`http://kaijiang.zhcw.com/zhcw/html/ssq/list_${pageNum}.html`)
    .end((err, data) => {
      if (err) return console.log(`爬取页面失败，当前页面为：${pageNum}`);
      const $ = cheerio.load(data.text);
      $(".wqhgt tbody tr").each((index, item) => {
        if (index !== 0 && index !== 1 && index !== 22) {
          const date = $(item).find("td")[0]
            ? $(item).find("td")[0].children[0].data
            : 0;
          const period = $(item).find("td")[1]
            ? $(item).find("td")[1].children[0].data
            : 0;
          let nums = [];
          if ($(item).find("td")[2]) {
            $(item)
              .find("td")[2]
              .children.forEach((em) => {
                if (em.children) {
                  nums.push(em.children[0].data);
                }
              });
          }

          resData.push({
            date,
            period,
            nums,
          });
        }
      });
      allData.push(resData);
    });
}

getPage().then((pageTotal) => {
  console.log(`总页数：${pageTotal}`);

  let index = 1;
  let timer = setInterval(() => {
    if (index > Number(pageTotal)) {
      clearInterval(timer);
    }
    getData(index);
    index++;
  }, 2000);

  setTimeout(() => {
    fs.writeFile("./data1.js", JSON.stringify(allData), (error) => {
      if (error) {
        console.log(`创建失败：${error}`);
      }
      console.log(`创建成功！`);
    });
  }, 2050 * pageTotal);
});
