// Research into all operators mentioned in this session, give an example of each.

//+ Addition
 let i = 0;
 let j = i + 8;
 console.log (j);

 //- Subtraction
 let a = 0;
 let b = a - 8;
 console.log (b);

 //* Multiplication
 let c = 5;
 let d = c*5;
 console.log(d);

 //** Exponentiation
 let k = 5;
 let l = k**7;
 console.log(l); 

 //*= 
 x = 5; y=x*=3;
 console.log(y);

 /// Division
 let e = 6;
 let f = e/3;
 console.log(f);

 ///= 
 let o = 10; 
 let p=o/=2;
 console.log(p); 

// ++ Increment
let g = 8; g++;
console.log(g);

// -- Decrement
let h = 8; h--;
console.log(h);

//+=
let q = 20; 
let r = q+=1;
console.log(r);

//-=
let s = 20;
let t = s-=1;
console.log(t);

// = 
i = 10;
j = i-1;
console.log(j);

// % Modulus (Division Remainder)
m = 73;
n = m % 9;
console.log(n); 

// ==
function testEqual(val) {
if (val==11) {
    return "true";
   }
return "false";
}
console.log(testEqual(11));
console.log(testEqual(10));

// !=
function testEqual2(a) {
if (a!=5) {
    return "false";
   }
return "true";
}
console.log(testEqual2(6));
console.log(testEqual2(5));

// !==
function testEqual3(b) {
    if (b!==5) {
        return "false";
       }
    return "true";
    }
    console.log(testEqual3(6));
    console.log(testEqual3(5));


