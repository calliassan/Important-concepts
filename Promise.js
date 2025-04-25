// ***Consuming Promise************
const cart = ["Kurtha", "shocks", "vest", "Trouser"];

Createorder(cart)
  .then(function (orderid) {
    console.log(orderid);
    return orderid;
  })
  .then(function (orderid) {
    return proceedtopay(orderid);
  })
  .then(function (payinfo) {
    console.log(payinfo);
    return payinfo;
  })
  .catch(function (err) {
    console.log(err.message);
  });

//   **********Creating Promise***********
function Createorder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validatecart(cart)) {
      const err = new Error("invalid cart");
      reject(err);
    }
    const orderid = "123";
    if (orderid) {
      setTimeout(() => {
        resolve(orderid);
      }, 2000);
    }
  });
  return pr;
}

function validatecart(cart) {
  return true;
}
function proceedtopay(orderid) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}
