function longestCommonPrefix(strs){
    if(strs.length===0){
        return ""
    }
    let prefix="";
    let firststr=strs[0]
    for(let i=0;i<firststr.length;i++){
        let char=firststr[i]
        for(let j=1;j<strs.length;j++){
            if(i>strs[j].length||strs[j][i]!==char){
                return prefix
            }
        }
        prefix+=char
    }
    return prefix
}
console.log(longestCommonPrefix(["flower","flow","flight"]))