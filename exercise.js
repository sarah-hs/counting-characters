function countChars(str, char) {
    var result = 0;
    str = str.toUpperCase();
    char = char.toUpperCase();
    for(let c of str){
        if(c == char){
            result += 1;
        }
    }
    return result;
}

(function() {
    const res = countChars("Some text here", "e");
    console.log(res);
})();

module.exports = countChars;
