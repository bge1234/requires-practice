var calc = require("./calculator");
var total = calc(10.00);
console.log("calc(total) = " + total);

var albums = require("./albums");
var first_album = albums[5];
console.log("albums[5] = " + first_album);

var backpack = require("./backpack");
var isbn = backpack.book.isbn;
console.log("backpack.book.isbn = " + isbn);

var cat = require("./cat");
cat();
