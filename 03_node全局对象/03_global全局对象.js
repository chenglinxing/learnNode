console.log(global);

var name = "11";
console.log(name); //11
console.log(global.name); //undefined

//不会像window一样  将全局定义的变量放到window上
