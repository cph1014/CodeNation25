let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = str.match(/[aeiouy]/gi);
let result = str.lastIndexOf(vowels);
console.log(vowels);

//g modifier: global. All matches (don't return on first match)
//i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])