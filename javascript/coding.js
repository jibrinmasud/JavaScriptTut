// var name = "jibrin";
// var age = 23;
// var message = "Hi my name is " + name + "and i am " + age + "years old";
// console.log(message);

//conditional statements

// var Account = 300;
// var nikeSBshoes = 799.23;
// var coupon = 500;

// if (nikeSBshoes <= Account) {
//   Account -= nikeSBshoes;

//   console.log("I just bought a new nikeSB shoes");

//   console.log("Account Balance " + Account);

// }
//  else if (nikeSBshoes - coupon <= Account) 
//     {
//   console.log(
//     " you bought using a coupon " + "And your balance is $" + Account
//   );

//   Account -= nikeSBshoes - coupon;
//   } else { 
//   console.log("Low Acount Balance to buy the shoe");
// }

// Javascript Array

var Student = ["Abu", "musa", "Ali","Fatima", "Safiya"];
var naughtyList = [];

naughtyList.push(Student[3]);

var index = naughtyList.indexOf("Fatima");
if(index > -1){
    naughtyList =naughtyList.splice(index, 3)
}
console.log(index);

console.log(Student);