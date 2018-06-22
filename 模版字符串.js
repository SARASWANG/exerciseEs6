var person = {
    name : 'lele',
    age : 12,
    sex : 'man'
}
var str = `我是${person.name}
我今年${person.age}岁了
我是一个${person.sex}`
console.log(str);

setTimeout(function() {
    // console.log(this)
},1000)

// 箭头函数
setTimeout(()=> {
    // console.log(this)
},1000)

const  set = new Set([1,2,3,1,2]);
const arr = [...set]
// console.log(arr);

// 数组去重
const arr2 = [1,2,3,4,1,2,4];
const set2 = new Set(arr2)
const result = [...set2]
console.log(result)