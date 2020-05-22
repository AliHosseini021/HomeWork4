//question 6
function subsetOfStr (strArg){
    strArg = strArg.split("")
    let tmp = "" , ans = []
    for(let i = 0 ; i < strArg.length ; i++){
        tmp = ""
        for(let j = i ; j < strArg.length ; j++){
            tmp += strArg[j]
            ans.push(tmp)
        }
    }
    return ans
}
