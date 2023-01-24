



function countSpaces(str) {
    str = str.trim()
    let c = 0
    for(let t of str){
        if(t == ' '){
            c++
        }
    }
    console.log(c)
    return c

//    let s = "hello world"
//    let arr = s.split(' ') // ['hello', 'world']
//    return arr.length - 1


}
