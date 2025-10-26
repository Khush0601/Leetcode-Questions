function reverseWords(str){
    let newArr=[]
    let arr=str.split(' ')
    for(let i=arr.length-1;i>=0;i--){
        let reverseWord=""
       for(let j=arr[i].length-1;j>=0;j--){
          reverseWord+=arr[i][j]
         
        }
        newArr.push(reverseWord)
    }
    return newArr.join(' ')
}
console.log(reverseWords('I LOVE IBM'))