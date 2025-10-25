function countPairs(arr,target){
    let finalArr=[]
    for(let i=0;i<arr.length-1;i++){
       
        for(let j=i+1;j<arr.length;j++){
          if(Math.abs(arr[i]-arr[j])===target){
            finalArr.push([arr[i],arr[j]])
            
          }
        }
    }
    
    return finalArr.length
}
console.log(countPairs([1,3,5],2))