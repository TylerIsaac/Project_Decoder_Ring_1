// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is equal to 0", () => {
    let actual = caesar("tester", 0);
    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("should return false if the shift value is less than -25", () => {
    let actual = caesar("tester", -26);
    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("should return false if the shift value is greater than 25", () => {
    let actual = caesar("tester", 26);
    expect(actual).to.be.false;
  });
});
describe("caesar", () => {
  it("should ignore uppercase letters", () => {
    let expected = "cheud";
    let actual = caesar("ZebRa", 3);
    expect(actual).to.eql(expected);
  });
});

describe("caesar", () => {
  it("should maintain spaces and nonalphabetic symbols in the message", () => {
    let expected = "yxiaro'p dxqb";
    let actual = caesar("Baldur's Gate", -3);
    expect(actual).to.eql(expected);
  });
});
