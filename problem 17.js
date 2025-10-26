function hcf(a,b){
    let aArr=[]
    let bArr=[]
    let commonArr=[]
    for(let i=1;i<=a;i++){
        if(a%i===0){
            aArr.push(i)
        }
    }
    for(let i=1;i<=b;i++){
        if(b%i===0){
            bArr.push(i)
        }
    }
    for(let i=0;i<aArr.length;i++){
        for(let j=0;j<bArr.length;j++){
            if(aArr[i]===bArr[j]){
                commonArr.push(aArr[i])
            }
        }
    }
    return Math.max(...commonArr)
}
console.log(hcf(81,27))