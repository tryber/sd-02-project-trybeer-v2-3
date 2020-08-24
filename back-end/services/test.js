// const a = {
//   2: [
//     {
//       orderId: 2,
//       date: 1563148800000,
//       qt: 6,
//       name: 'Skol Lata 350ml',
//       price: 2.200000047683716,
//     },
//     {
//       orderId: 2,
//       date: 1563148800000,
//       qt: 1,
//       name: 'Skol 269ml',
//       price: 2.190000057220459,
//     },
//   ],
//   3: [
//     {
//       orderId: 3,
//       date: 1550188800000,
//       qt: 3,
//       name: 'Skol Lata 350ml',
//       price: 2.200000047683716,
//     },
//     {
//       orderId: 3,
//       date: 1550188800000,
//       qt: 2,
//       name: 'Skol 269ml',
//       price: 2.190000057220459,
//     },
//   ],
// };

// const b = Object.values(a).map(order => {
//   const products = [];
//   return order.reduce((acc, cur, i) => {
//     products.push(cur.);
//     return {
//       orderId: cur.orderId,
//       date: cur.date,
//       price: (acc.price || 0) + (cur.price * cur.qt),
//       products: ['oi'],
//     };
//   }, {});
// });

// console.log(b);
