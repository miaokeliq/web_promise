function ajax(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(["111", "222", "333"], "213");
      reject({ code: 401, info: "路径错误" });
    }, 1000);
  });
}
var pajax = ajax("11111");

pajax
  .then((res) => {
    console.log("请求成功");
    console.log(res);
    console.log(pajax);
  })
  .catch((error) => {
    console.log("请求失败");
    console.log(error);
    console.log(pajax);
  });
