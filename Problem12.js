function longestStr(str){
    let maxLen=0;
    
    for(let i=0;i<str.length;i++){
        let curr=''
        for(let j=i;j<str.length;j++){
            if(curr.includes(str[j])){
                break
            }
            else{
                curr+=str[j]
                maxLen=Math.max(maxLen,curr.length)
            }
        }
    }
    return maxLen
}
console.log(longestStr("abcabcbb"))
console.log(longestStr("bbbbb"));    // 1 ("b")
console.log(longestStr("pwwkew"));   // 3 ("wke")
console.log(longestStr("")); 