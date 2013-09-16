Russian Cryllic to Latin Transliteration
=================================================
A JavaScript function that transliterate strings from cryllic russian to latin.

This project is build using the [translitit-engine][translitit-engine], and its unit tests has been lifted from [Staltec][staltec]'s project called [transliteration.cyr][transliteration.cyr].

Please note. I ([Martin Gausby](https://github.com/gausby)) do not speak Russian, so I can not know if this package transliterate 100% correct. Please file bug reports, add unit tests and even try to fix problems if you find some. Pull requests are more than welcome.

The motivation for this project was to test the transliteration engine I created.

[translitit-engine]: https://github.com/gausby/translitit-engine
[staltec]: https://github.com/Staltec
[transliteration.cyr]: https://github.com/Staltec/transliteration

## Installation and Usage
Add it to your npm-based project by typing the following in your project root.

    npm install translitit-russian-cryllic-to-latin --save

Now, you can include the transliteration service in your project by including it:

    var translit = require('translitit-russian-cryllic-to-latin');

´translit´ will now be a function, that will transliterate its input.

    translit('Борщагівка'); // returns 'Borshchagivka'


## Development
After cloning the project you will have to run `npm install` in the project root. This will install the various grunt plugins and other dependencies.


### QA tools
The QA tools rely on the [Grunt](http://gruntjs.com) task runner. To run any of these tools, you will need the grunt-cli installed globally on your system. This is easily done by typing the following in a terminal.

    $ npm install grunt-cli -g

The unit tests will need the [Buster](http://busterjs.org/) unit test framework.

    $ npm install -g buster

These two commands will install the buster and grunt commands on your system. These can be removed by typing `npm uninstall buster -g` and `npm uninstall grunt-cli -g`.


#### Unit Tests
When developing you want to run the script watcher. Navigate to the project root and type the following in your terminal.

    $ grunt watch:scripts

This will run the jshint and tests each time a file has been modified.


## License
The MIT License (MIT)

Copyright (c) 2013 Martin Gausby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
