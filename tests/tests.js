var assert = require('assert');
var Roman = require('../roman-numerals.js')

describe('roman-numerals.js', function () {
    describe('#generate(value)', function () {
        it('should return undefined when a value is not present', function () {
            assert.equal(undefined, Roman.generate());
        });

        it('should return undefined when a value is not an integer', function () {
            assert.equal(undefined, Roman.generate(1.1));
            assert.equal(undefined, Roman.generate('hello'));
            assert.equal(undefined, Roman.generate(undefined));
            assert.equal(undefined, Roman.generate({}));
        });

        it('should return undefined when a value is less than 1', function () {
            assert.equal(undefined, Roman.generate(0));
            assert.equal(undefined, Roman.generate(-1));
            assert.equal(undefined, Roman.generate(0.9));
        });

        it('should return undefined when a value is greater than 3999', function () {
            assert.equal(undefined, Roman.generate(4000));
        });

        it('should return a valid Roman numeral when an integer is entered', function () {
            assert.equal('M', Roman.generate(1000));
            assert.equal('CM', Roman.generate(900));
            assert.equal('D', Roman.generate(500));
            assert.equal('CD', Roman.generate(400));
            assert.equal('C', Roman.generate(100));
            assert.equal('XC', Roman.generate(90));
            assert.equal('L', Roman.generate(50));
            assert.equal('XL', Roman.generate(40));
            assert.equal('X', Roman.generate(10));
            assert.equal('IX', Roman.generate(9));
            assert.equal('V', Roman.generate(5));
            assert.equal('IV', Roman.generate(4));
            assert.equal('I', Roman.generate(1));
            assert.equal('MMMCMXCIX', Roman.generate(3999));
        });
    });

    describe('#parse(value)', function () {
        it('should return undefined when a value is not present', function () {
            assert.equal(undefined, Roman.parse());
        });

        it('should return undefined when a value is not a string', function () {
            assert.equal(undefined, Roman.parse({}));
            assert.equal(undefined, Roman.parse(1));
            assert.equal(undefined, Roman.parse(undefined));
        });

        it('should return undefined when a value is not a valid Roman numeral', function () {
            assert.equal(undefined, Roman.parse('hello'));
        });

        it('should return the corresponding Arabic numeral when a Roman numeral is entered', function () {
            assert.equal(1000, Roman.parse('M'));
            assert.equal(900, Roman.parse('CM'));
            assert.equal(500, Roman.parse('D'));
            assert.equal(400, Roman.parse('CD'));
            assert.equal(100, Roman.parse('C'));
            assert.equal(90, Roman.parse('XC'));
            assert.equal(50, Roman.parse('L'));
            assert.equal(40, Roman.parse('XL'));
            assert.equal(10, Roman.parse('X'));
            assert.equal(9, Roman.parse('IX'));
            assert.equal(5, Roman.parse('V'));
            assert.equal(4, Roman.parse('IV'));
            assert.equal(1, Roman.parse('I'));
            assert.equal(3999, Roman.parse('MMMCMXCIX'));
        });
    });
});
