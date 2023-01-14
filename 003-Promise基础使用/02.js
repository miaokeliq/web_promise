function ajax(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      reject();
    }, 1000);
  });
}

ajax("1111")
  .then(() => {
    console.log("请求成功");
  })
  .catch(() => {
    console.log("请求失败");
  });
