// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should ignore case of input", () => {
        let expected = "23513434112251";
        let actual = polybius("mEsSage");
        expect(actual).to.equal(expected);
    })
})

describe("polybius", () => {
    it("should, when encoding, translate 'i' and 'j' to 42", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.equal(expected);
    })
})
describe("polybius", () => {
    it("should, when decoding, translate 42 to 'i/j'", () => {
        const expected = "(i/j)(i/j)m lahey"
        const actual = polybius("424223 1311325145",false)
        expect(actual).to.eql(expected);
    })
})
describe("polybius", () => {
    it("should maintain spaces", () => {
        const expected = "42 42 42";
        const actual = polybius("i j i");
        expect(actual).to.eql(expected);
    })
})