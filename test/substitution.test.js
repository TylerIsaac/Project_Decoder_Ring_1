// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the given alphabet is not exactly 26 characters long", () => {
        let actual = substitution("message","fjdifjewpaj");
        expect(actual).to.be.false;
    })
})

describe("substitution", () => {
    it("should maintain spaces before and after decoding", () => {
        let expected = "mes sage";
        let actual = substitution("ykr rpik", "plmoknijbuhvygctfxrdzeswaq",false);
        expect(actual).to.eql(expected);
    })
})

describe("substitution", () => {
    it("should ignore capital letters", () => {
        let expected = "ykrrpik";
        let actual = substitution("MeSsAge", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.eql(expected);
    })
})
describe("substitution", () => {
    it("should return false if the given alphabet has duplicates", () => {
        let actual = substitution("message", "plmopnijbupvygctfxrdzeswaq");
        expect(actual).to.be.false;
    })
})