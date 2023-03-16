

let str = 'aa aba abba abbba abca abea';
//let regexp = /a\wb/g;
//let regexp = /a..b/g;
//let regexp = /a+b+a+/g;
//let regexp = /ab+a/g;
let regexp = /ab*a/g;
let strOutput = str.match(regexp);
console.log(str.match(regexp));
console.log(str.replace(regexp, 'нашел'));
strOutput = strOutput.join(' ');
console.log(strOutput);



document.getElementById('output').innerHTML = "Результат регулярного выражения: " + strOutput;