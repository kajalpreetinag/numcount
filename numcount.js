const input = require("readline-sync")
let n = input.questionInt("enter the number: ")
count=0;
let i =1
while(n>=i){
    k=n%10
    count=count+1;
    n = Math.floor(n/10)
}
console.log(count)