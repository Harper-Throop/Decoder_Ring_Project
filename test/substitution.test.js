// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution()", () => {
    describe("Errors", () => {
        it("Returns false if there is no substitution alphabet", () => {
            const message = "thinkful";
            const alphabet = undefined;
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });

        it("Returns false if the alphabet is not 26 characters in length", () => {
            const message = "thinkful";
            const alphabet = "short";
            const actual1 = substitution(message, alphabet);
          
            const alphabet2 = "abcdefghijklmnopqrstuv$" //too long
            const actual2 = substitution(message, alphabet2);

            expect(actual1).to.be.false;
            expect(actual2).to.be.false;
        });

        it("Returns false if not all of the characters in the alphabet are unique", () => {
            const message = "thinkful";
            const alphabet = "abcabcabcabcabcabcabcabcyz";
            const actual = substitution(message, alphabet);

            expect(actual).to.be.false;
        });
    });

    describe("Encoding", () => {
        it("Should properly encode a message", () => {
            const message = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "jrufscpw";

            const actual = substitution(message, alphabet);

            expect(actual).to.be.equal(expected);
        });

        it("Should correctly encode a message with spaces", () => {
            const message = "You are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "elp xhm xf mbymwwmfj dne";

            const actual = substitution(message, alphabet);

            expect(actual).to.be.equal(expected);
        });

        it("Should properly encode a message when the alphabet has characters other than letters in it", () => {
            const message = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "y&ii$r&";

            const actual = substitution(message, alphabet);

            expect(actual).to.be.equal(expected);
        });
    });

    describe("Decoding", () => {
        it("Should properly decode a message", () => {
            const message = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "thinkful";

            const actual = substitution(message, alphabet, false);

            expect(actual).to.be.equal(expected);
        });

        it("Should correctly decode a message with any key containing unique character", () => {
            const message = "y&ii$r&";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const expected = "message";

            const actual = substitution(message, alphabet, false);

            expect(actual).to.be.equal(expected);
        });

        it("Should properly decode a message with spaces", () => {
            const message = "elp xhm xf mbymwwmfj dne";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const expected = "you are an excellent spy";

            const actual = substitution(message, alphabet, false);

            expect(actual).to.be.equal(expected);
        });
    });
})
