function generatePlates(plate){
let result=[]
let chars=plate.split('')
const missingInd=chars.findIndex(c=>c==='?')
if(missingInd===-1){
    return plate
}
const isLetter=/[A-Z]/.test(plate[missingInd])||missingInd<3;
const options = isLetter ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "0123456789";
for(let ch of options){
    chars[missingInd]=ch
    result.push(chars.join(''))
}
return result
}
console.log(generatePlates("AB?-123"))