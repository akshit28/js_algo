// reverseWords("JavaScript is awesome"); // "tpircSavaJ si emosewa"
reverseWords("Ja@vaS$cri&pt i^s awe*som#e")
    //"tp@irc$Sav&aJ s^i emo*sew#a”
// reverseWords("Ja@vaS$cri&pt i^s awe*som#e")
    //"tp@irc$Sav&aJ s^i emo*sew#a”



function reverseWords(str){
    let newStr = ''
    let tempStr = []
    let strArr = str
    let charMap = new Map()

    for(let i=0;i<strArr.length;i++){
        if(/[a-zA-Z ]/g.test(strArr[i])){
            newStr += strArr[i]
        }else{
            charMap.set(i, strArr[i])
        }
    }
    let temp = newStr.split(' ')
    for(let i=0;i<temp.length;i++){
        tempStr += temp[i].split('').reverse().join('') +' '
    }

    let newStrArr = tempStr.split('')
    charMap.forEach((value, key) => {
        newStrArr.splice(key, 0, value)
    })
    console.log(newStrArr.join(''))
}
