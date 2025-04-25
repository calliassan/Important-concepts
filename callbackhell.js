// *********callbackhell**************
// const cart = ["kurtha", "pajamas", "shocks"];

// Createorder(cart, function (orderid) {
//   proceedttopay(orderid, function (payinfo) {
//     showordersummary(payinfo, function (payinfo) {
//       Updatewallet();
//     });
//   });
// });

//To mitigate above inversion of control issue, we use promise as below

// ******Promise hell*************
//*****without return ispromise hell*********

// Createorder(cart)
//   .then(function (orderid) {
//     proceedttopay(orderid);
//   })
//   .then(function (payinfo) {
//     ordersummary(payinfo);
//   })
//   .then(function (payinfo) {
//     Updatewallet(payinfo);
//   });

// ***********How to come out of promise hell(use Return)*********
// Createorder(cart)
//   .then(function (orderid) {
//     return proceedttopay(orderid);
//   })
//   .then(function (payinfo) {
//     return ordersummary(payinfo);
//   })
//   .then(function (payinfo) {
//     return Updatewallet(payinfo);
//   });
