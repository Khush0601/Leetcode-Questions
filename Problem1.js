function hasSameDigits(s){
   while(s.length>2){
     let num = '';
    for(let i = 0; i < s.length - 1; i++){
        let a = Number(s[i]);
        let b = Number(s[i+1]);
        num += (a + b) % 10; 
        
    }
    s=num
   }
    return s[0]===s[1];
}

console.log(hasSameDigits('3902'));