console.log("aa");
// let , const
// let的值可以被修改，const不能
let age=30;
age=40;
console.log(age);

const a=10;
//a=111;//会报错，const为常量
console.log(a);
//相加转换：去掉"+",用${}
console.log(`My number is ${age} and I am ${a}`);
//三目运算
const x=10;
const color=x>10?"red":"blue";
console.log(color); 
//switch
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("ether");
}    