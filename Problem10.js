function getValidTime(time){
    let result=[]
    let char=time.split('')
    let missingInd=char.findIndex(c=>c==='?'|| c===' ')
    if(missingInd===-1){
        return time
    }
    for(d=0;d<=9;d++){
        char[missingInd]=d.toString()
        const hh=parseInt(char[0]+char[1])
        const mm=parseInt(char[3]+char[4])
        const ss=parseInt(char[6]+char[7])

        if(hh>0 && hh<=23 && ss>0 && ss<=59 && mm>0 && mm<=59 ){
            result.push(char.join(''))
        }
    }
    return result
}
console.log(getValidTime("1?:30:45"))