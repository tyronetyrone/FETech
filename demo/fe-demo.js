//
// console.log("1");
// Promise.resolve()
//   .then(function a() {
//     console.log("2");
//     Promise.resolve().then(function c() {
//         console.log("3");
//     });
//   })
//   .then(function b() {
//     console.log("4");
//     Promise.resolve().then(function d() {
//         console.log("5");
//     });
//   });
// console.log("6");

// 2018字节经典面试题 事件循环-宏任务-微任务-promise-async/await
// async function async1() {
// 	console.log("async1 start");
// 	await async2();
// 	console.log("async1 end");
// }
//
// async function async2() {
// 	console.log("async2");
// }
//
// console.log("script start");
//
// setTimeout(function() {
// 	console.log("setTimeout");
// }, 0);
//
// async1();
//
// new Promise(function(resolve) {
// 	console.log("promise1");
// 	resolve();
// }).then(function() {
// 	console.log("promise2");
// });
// console.log('script end')

// 箭头函数
// 'use strict'
// let o={
// 	fn: () => {
// 		console.log(this)
// 	}
// };
// o.fn() // window
// let f=o.fn;
// f() // window
//
// let p={
// 	fn: function() {
// 		console.log(this)
// 	}
// };
// p.fn() // p
// let f2=p.fn;
// f2() // window

// 事件循环-宏任务-微任务-promise
// console.log("begins");
//
// setTimeout(() => {
// 	console.log("setTimeout 1");
// 	Promise.resolve().then(() => {
// 		console.log("promise 1");
// 	});
// }, 0);
//
// new Promise(function (resolve, reject) {
// 	console.log("promise 2");
// 	setTimeout(function () {
// 		console.log("setTimeout 2");
// 		resolve("resolve 1");
// 	}, 0);
// }).then((res) => {
// 	console.log("dot then 1");
// 	setTimeout(() => {
// 		console.log(res);
// 	}, 0);
// });


