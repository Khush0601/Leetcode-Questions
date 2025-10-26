function missingNum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    let noSum=0
    for(let j=1;j<=arr.length;j++){
       noSum+=j
    }
    return noSum-sum
}
console.log(missingNum([1,0,3]))