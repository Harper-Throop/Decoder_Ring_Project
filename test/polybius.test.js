// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius()", () => {
    describe("Encoding", () => {
        it("Should properly encode a message", () => {
            const message = "thinkful";
            const expected = "4432423352125413";

            const actual = polybius(message);

            expect(actual).to.be.equal(expected);
        });

        it("Should properly encode both 'i' and 'j' to 42", () => {
            const message = "jovial";
            const expected = "424315421113";

            const actual = polybius(message);

            expect(actual).to.be.equal(expected);
        });

        it("Should properly encode messages containing spaces and capital letters", () => {
            const message = "Hello world";
            const expected = "3251131343 2543241341";

            const actual = polybius(message);

            expect(actual).to.equal(expected);
        });
    });
    
    describe("Decoding", () => {
        it("Should properly decode a message", () => {
            const message = "3251131343";
            const expected = "hello";

            const actual = polybius(message, false);

            expect(actual).to.be.equal(expected);
        });

        it("Should read 42 both 'i' and 'j'", () => {
            const message = "4432423352125413";
            const expected = "th(i/j)nkful";

            const actual = polybius(message, false);

            expect(actual).to.be.equal(expected);
        });

        it("Should properly ignore spaces", () => {
            const message = "3251131343 2543241341";
            const expected = "hello world";

            const actual = polybius(message, false);

            expect(actual).to.be.equal(expected);
        });

        it("Should return false if total length(excluding spaces) is odd", () => {
            const message = "44324233521254134";

            const actual = polybius(message, false);

            expect(actual).to.be.false;
        });
    });
})