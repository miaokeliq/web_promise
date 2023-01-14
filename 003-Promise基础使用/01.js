//promise 承诺
// 前期 画饼

//promise 构造函数
//接收参数 executor 执行器
// resolve：决定    reject：拒绝
var mypro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
  //如果销售额达到了
  // resolve();
  //如果销售额没达到了
  // reject()
});

console.log(mypro);

/* mypro.then(
  () => {
    console.log("发奖金");
  },
  () => {
    console.log("不发奖金");
  }
); */

/* mypro.catch(() => {
  console.log("不发奖金");
}); */

mypro
  .then(() => {
    console.log("发奖金");
  })
  .catch(() => {
    console.log("不发奖金");
  });
