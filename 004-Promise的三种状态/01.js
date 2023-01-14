//promise 承诺
// 前期 画饼

//promise 构造函数
//接收参数 executor 执行器
var mypro = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
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
  .then(
    () => {
      console.log("发奖金");
    },
    () => {
      console.log("不发奖金111");
      console.log(mypro);
    }
  )
  .catch(() => {
    console.log("不发奖金");
  });
