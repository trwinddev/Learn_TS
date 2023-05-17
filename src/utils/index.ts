// const variable: dataTypes = value

import { FinalProduct, Product, ProductNewFeature } from "./interfaces";

export function total(a: number, b: number): void {
  a + b;
  // return a + b;
}

total(5, 7);

/**
 // Tuple
  string[] -> ['phong', 'react', 'javascript']
  Cú pháp: [number, string]
  Đúng:  [12345, 'phong']
  Sai: ['phong', 123]
 *
 */
/**
 * Enum
 * APPROVED
 * PENDING
 * REJECTED
 */
// Any
// Union
/**
 * Literal
 * type Age = 18 | 30 | 40
 */
// Function
// Void
// unknown
// let aNumber: unknown;
// aNumber = 100;
// if (typeof aNumber === "number") {
//   aNumber.toFixed(2);
// }
// const a = 100;
// a.toFixed(2); // 100.00
// never
// contain no values
// represent return type of a function throw error
// function raiseError(err: string): never {
//   throw new Error(err);
// }
// function reject() {
//   return raiseError("error");
// }
// let loop = function forever() {
//   while (true) {
//     console.log("Hello world !");
//   }
// };

// interface

const product: FinalProduct = {
  name: "car",
  brand: "bmw",
  color: "red",
};
function addProduct(product: FinalProduct) {
  //
  product.name = "motorbike";
}
addProduct(product);
