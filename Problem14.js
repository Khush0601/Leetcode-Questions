function mostFrequent(str){
    let freq={}
    for(let i=0;i<str.length;i++){
        if(freq[str[i]]){
            freq[str[i]]++
        }
        else{
            freq[str[i]]=1
        }
    }
   let maxCount=0;
   let maxChar=""
   for(let key in freq){
    if(freq[key] > maxCount){
        maxCount=freq[key]
        maxChar=key
    }
   }
    return maxChar
    
}
console.log(mostFrequent("success"))