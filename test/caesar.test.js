// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar()", () => {
    describe("Errors", () => {
        it("Returns false if shift is 0", () => {
            const message = "thinkful";
            const shift = 0;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });

        it("Returns false if shift is greater than 25", () => {
            const message = "thinkful";
            const shift = 99;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });

        it("Returns false if shift is less than -25", () => {
            const message = "thinkful";
            const shift = -26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
    });
    
    describe("Encoding", () => {
        it("Correctly encodes message forward", () => {
            const message = "thinkful";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "wklqnixo";

            expect(actual).to.equal(expected);
        });

        it("Correctly encodes message backwards", () => {
            const message = "thinkful";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "qefkhcri";

            expect(actual).to.equal(expected);
        });

        it("Correctly encodes messages with spaces, capital letters, and symbols", () => {
            const message = "This is a secret message!";
            const shift = 8;
            const actual = caesar(message, shift);
            const expected = "bpqa qa i amkzmb umaaiom!";

            expect(actual).to.equal(expected);
        });
    });

    describe("Decoding", () => {
        it("Correctly decodes message forward", () => {
            const message = "wklqnixo";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "thinkful";

            expect(actual).to.equal(expected);
        });

        it("Correctly decodes message backwards", () => {
            const message = "qefkhcri";
            const shift = -3;
            const actual = caesar(message, shift, false);
            const expected = "thinkful";

            expect(actual).to.equal(expected);
        });

        it("Correctly encodes messages with spaces, capital letters, and symbols", () => {
            const message = "bpqa qa i amkzmb umaaiom!";
            const shift = 8;
            const actual = caesar(message, shift, false);
            const expected = "this is a secret message!";

            expect(actual).to.equal(expected);
        });
    });
})
