// checks words for palindrome and returns boolean value
module.exports.isPalindrome = (word) => {
    word= word.toLowerCase();
    let reverseWord = word.split('').reverse().join('');
    return word === reverseWord;
}
// sanitises array from spaces and empty element
module.exports.removeWhiteSpaceFromArray = (array)=>{
    return array.filter((arrEle) => {
        return (arrEle != ' ' && arrEle!='')
    });
}
// sanitises string from punctuation markes and special characters
module.exports.removePunctuationMarks = (line)=>{
    //return line.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return line.replace(/[\\.,@+[|"'<>?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}
// flattens the level one nested array
module.exports.nestArrToFlatObject = (nestedArr) => {
    let palObj= {};
    nestedArr.map((eachEle)=>{
        palObj[eachEle[0]] = eachEle[1];
    });
    return palObj;
}