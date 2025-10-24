function findMedianSortedArray(nums1,nums2){
    let finalArr=[]
    for(let i=0;i<nums1.length;i++){
        finalArr[i]=nums1[i]
    }
    for(let j=0;j<nums2.length;j++){
        finalArr[nums1.length+j]=nums2[j]
    }
    finalArr.sort((a,b)=>a-b)
    let n=finalArr.length
    if(n%2!==0){
        return finalArr[Math.floor(n/2)]
    }
    else{
        return (finalArr[(n/2)-1]+finalArr[n/2])/2
    }
   
}
console.log(findMedianSortedArray([1,2],[3,4]))