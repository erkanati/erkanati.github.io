function onlyString(arg1, arg2){
    if ((typeof(arg1) && typeof(arg2)) !== 'String' ){
        return arg1.toString() + arg2.toString()}
}

var res = onlyString(11, 22)
console.log(res)