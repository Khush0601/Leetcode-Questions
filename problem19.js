function sumofDigits(n){
    let number=String(n)
   let sum=0
    for(let i=0;i<number.length;i++){
        sum+=Number(number[i])
    }
    return sum
}
console.log(sumofDigits(12345))