import { describe, test, expect } from "vitest";
import { perfectPassCode } from "main.js";

describe("Tests for verifying criteria in increasing order of specificity", () => {

  test("checks that the result is a number", () => {
    const result = perfectPassCode(4, 4);
    expect(typeof result).toBe("number");
  });

  test("checks that the result has two digits or null for invalid", () => {
    const result = perfectPassCode(3, 8); 
    if (result === null) {
      expect(result).toBeNull(); 
    } else {
      expect(typeof result).toBe("number");
      expect(result).toBeGreaterThanOrEqual(10);
      expect(result).toBeLessThan(100);
    }
  });
  

  test("checks that the result is a two-digit perfect square", () => {
    const result = perfectPassCode(3, 12);
    const validPerfectSquares = [16, 25, 36, 49, 64, 81];
    expect(validPerfectSquares).toContain(result);
  });

});




// describe("Error handling tests", () => {
// test("throws an error if string used", () => {
//   expect(() => perfectPassCode("5", 5)).toThrowError("Invalid input");
// });

// test("throws an error if null used", () => {
// expect(() => perfectPassCode(null, 5)).toThrowError("Invalid input");
// });

// test("throws an error if inputs are not undefined", () => {
// expect(() => perfectPassCode(undefined, undefined)).toThrowError("Invalid input");
// });

// test("throws an error if inputs are not numbers", () => {
// expect(() => perfectPassCode(NaN, 5)).toThrowError("Invalid input");
// });
// })


























































//Answer...
// export function perfectPassCode(num1, num2) {
//   //Variable containing valid results
  
//   const perfectSquares = [16, 25, 36, 49, 64, 81];

//   //Variable storing the result of the sum
//   const result = num1 * num2;

//   //Check that the result of the numbers input results in one of the valid options and return the result or alternative
//   if (!perfectSquares.includes(result)) {
//     return null;
//   } else {
//     return result;
//   }
// }