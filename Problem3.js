function lengthOfLongestSbstring(s){
    let set=new Set()
    let left=0,maxlength=0;
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++
        }
        set.add(s[right]);
        maxlength=Math.max(maxlength,right-left+1)
    }
    return maxlength
}
console.log(lengthOfLongestSbstring("abcabcbb"))