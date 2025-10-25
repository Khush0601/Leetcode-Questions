function threeSumClosest(nums,target){
      let arr=[]
    for(let i=0;i<nums.length;i++){
      let sum=0
     for(let j=i+1;j<nums.length;j++){
        for(k=j+1;k<nums.length;k++){
           sum=nums[i]+nums[j]+nums[k]
            arr.push(sum)
            
        }
     }
    }
let closest=arr[0]
for(let i=1;i<arr.length;i++){
    if(Math.abs(arr[i]-target)<Math.abs(closest-target)){
        closest = arr[i]
    }
}
return closest
}
let nums = [0,1,2], target = 3
console.log(threeSumClosest(nums,target))