function ajax(url, successCb, errorCb) {
  setTimeout(() => {
    //如果成功
    successCb();
    //如果失败
    errorCb();
  }, 1000);
  console.log("111222");
}

ajax(
  "111",
  () => {
    console.log("ajax成功");
  },
  () => {
    console.log("ajax失败");
  }
);
