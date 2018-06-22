const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
// let {loc, loc: {start}, loc: {start: {line}}} = node;
// console.log(loc);
// console.log(start);
// console.log(line);

// 对象的解构赋值方式
 const { loc } = {
     loc: {
         start: {
             line: 1,
             column: 5
         }
     }
 };
// console.log(loc);
{ loc: {start} } = {
    start: {
        line: 1,
        column: 5
    }
}
{start} = {
    start: {
        line: 1,
        column: 5
    }
}





// let [foo = true] =[];
// console.log(foo);
// let [x, y = 'b'] = ['a'];
// console.log(x);
// console.log(y);

