console.log("Hello JavaScript!!");

a = 10;

console.log(a);

myname = "Mubassir";

isLoggedIn = true;

console.log(typeof isLoggedIn);

let age = 20;

if (age >= 18) {
  console.log("You are eligible for DL!");

  myvar = "This should be visible outside block";
  var x = "This should also be visible";
  let y = "This should not be visible outside block";
  const pi = 3.14;
  
  pi = 4.14;
} else {
  console.log("You are not eligible!");
}

console.log(myvar);
console.log(x);
// console.log(y);
console.log(pi);