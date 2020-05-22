//question 7
function objToArr(obj={}){
    let ans = []
    for(let i in obj){
        ans.push([i,obj[i]])
    }
    return ans
}