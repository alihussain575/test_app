// console.log('start');

// setTimeout(() => {
//   console.log('middle');
// }, 2000);

// console.log('end');

/// callbacks
/// promises
/// async / await

// function app (callbacks) {
//     const name = 'ali'
//     callbacks(name)
// }

// app((name)=>{
//     console.log(name)
// })

// new Promise((resolver , reject) => {
//   resolver(
//     new Promise((resolveInner) => {
//       setTimeout(()=>{
//         console.log('asdf')
//         resolveInner()
//       }, 1000);
//     })
//   );
// });

// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const res = await response.json();

//   console.log(res);
// };

// getData()

// const data = [1, 2, 3, 4, 5, 6]

// console.log(data.filter((item)=> {
//     if(item > 3) {
//         return item
//     }
// }))



