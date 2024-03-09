console.log("aa");
// let , const
// let的值可以被修改，const不能
let age=30;
age=40;
console.log(age);

const a=10;
//a=111;//会报错，const为常量

//String,Number,Boolean,null,undefined

//console.log(s.toUpperCase())大写
//console.log(s.toLowerCase())小写

console.log(a);
//连接
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
//for
for(let i=0;i<10;i++){
    console.log(i)
}
//while
let i=0;
while (i<10){
    console.log(`While Loop Number:${i}`);
    i++;
}

//数组
const number=new Array(1,2,3,4);
console.log(number);

const fruits=["apple","orange"];
console.log(fruits);
//数组末尾加个元素
fruits.push("mangos");
//头部
fruits.unshift("strawberries");
//删除末尾
fruits.pop(); 
//索引
console.log(fruits.indexOf("orange"));


//JSON
const todoJSON=JSON.stringify(fruits);
console.log(todoJSON);  