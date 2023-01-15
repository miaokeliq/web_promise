/**
 *  @作者：mkl
 *
 */

//构造函数
function MklPromise(executor) {
  this.status = "pending";
  this.result = undefined;
  this.cb = []; //callback
  var _this = this;
  function resolve(res) {
    if (_this.status !== "pending") return;
    _this.status = "fulfilled";
    _this.result = res;
    _this.cb.forEach((item) => {
      item.successCB && item.successCB(_this.result);
    });
  }

  function reject(res) {
    if (_this.status !== "pending") return;
    _this.status = "rejected";
    _this.result = res;
    _this.cb.forEach((item) => {
      item.failCB && item.failCB(_this.result);
    });
  }

  executor(resolve, reject);
}

MklPromise.prototype.then = function (successCB, failCB) {
  if (!successCB) {
    successCB = (value) => value;
  }
  if (!failCB) {
    failCB = (error) => error;
  }
  return new MklPromise((resolve, reject) => {
    if (this.status === "fulfilled") {
      var result = successCB && successCB(this.result);
      successCB(this.result);
      if (result instanceof MklPromise) {
        result.then(
          (res) => {
            console.log(res);
            resolve(result);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
      } else {
        resolve(result);
      }
    }
    if (this.status === "rejected") {
      var result = failCB && failCB(this.result);
      failCB(this.result);
      if (result instanceof MklPromise) {
        result.then(
          (res) => {
            console.log(res);
            resolve(result);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
      } else {
        reject(result);
      }
    }
    //   console.log(this.status);
    if (this.status === "pending") {
      //收集回调
      this.cb.push({
        successCB: () => {
          var result = successCB(this.result);
          if (result instanceof MklPromise) {
            result.then(
              (res) => {
                console.log(res);
                resolve(result);
              },
              (err) => {
                console.log(err);
                reject(err);
              }
            );
          } else {
            resolve(result);
          }
        },
        failCB: () => {
          var result = failCB(this.result);
          if (result instanceof MklPromise) {
            result.then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
          } else {
            reject(result);
          }
        },
      });
    }
  });
};

MklPromise.prototype.catch = function (failCB) {
  this.then(undefined, failCB);
};
