# adamjc-roman-numerals

Hi there! :)

## Documentation

To use as a REST service either:
```
  cd rest-service
  npm install
  node src/app.js
```

you can then either send ajax requests to localhost:1337, or directly in a browser use the API, e.g.:
`localhost:1337/generate/3999`

***alternatively***, use my server @ `http://adamjc.com/demos/roman-numerals`, e.g.

`http://adamjc.com/demos/roman-numerals/generate/2015`
`http://adamjc.com/demos/roman-numerals/parse/MMXV`

this is using CORS so you can also send AJAX requests to it (provided you have a modern browser), e.g.

```
$.ajax({
  type: "get",
  url: "http://adamjc.com/generate/3999",
  contentType: "application/json",
  success: function(response){
    console.log(response);
  }
});
```

###Roman.generate(val)
Generates a Roman numeral from an integer.

`var romanNum = Roman.generate(2015) // romanNum === 'MMXV'`

###Roman.parse(val)
Parses a Roman numeral and returns the decimal representation of it.

`var arabicNum = Roman.parse('MMXV') // arabicNum === 2015`


##Installation & Usage
To run, open up `browser-example/index.html` and use either the rudimentary UI, or the developer console to test it.

Alternatively, to include into an application using CommonJS:

`var Roman = require('./roman-numerals.js');`

To test:

`npm install`

`mocha tests/tests`

