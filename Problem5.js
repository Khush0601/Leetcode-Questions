function maxArea(height){
    let maxArea=0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            let width=j-i;
            let ht=Math.min(height[i],height[j])
            let area=width*ht
            if(area>maxArea){
                maxArea=area
            }
        }
    }
    return maxArea
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))