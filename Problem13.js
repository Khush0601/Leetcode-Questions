function nonRepeating(str){
    let arr=[]
 let freq={}
 for(let i=0;i<str.length;i++){
    if(freq[str[i]]){
        freq[str[i]]++
    }
    else{
       freq[str[i]]=1
    }
 }
 for(let key in freq){
    if(freq[key]===1){
        arr.push(key)
    }
 }
 return arr[0]

}
console.log(nonRepeating('aabbcdde'))