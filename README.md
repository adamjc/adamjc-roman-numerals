# adamjc-roman-numerals

Hi there! :)

## Documentation

###Roman.generate(val)
Generates a Roman numeral from an integer.

`var romanNum = Roman.generate(2015) // romanNum === 'MMXV'`

###Roman.parse(val)
Parses a Roman numeral and returns the decimal representation of it.

`var arabicNum = Roman.parse('MMXV') // arabicNum === 2015`


##Installation & Usage
To run, open up index.html and use the console to test it.

Alternatively, to include into an application using CommonJS:

`var Roman = require('./roman-numerals.js');`

To test:

`npm install`

`mocha tests/tests`

