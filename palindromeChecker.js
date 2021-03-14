function palindrome(str) {
    let lowerStr = str.toLowerCase().split('');
    let lowerStrAlphanumeric = lowerStr.filter((currValue) => {
        console.log(currValue);
        return currValue.match(/^[0-9a-zA-Z]+$/);
    });
    lowerStr = lowerStrAlphanumeric.join('');
    console.log(lowerStr);
    for (let index in lowerStr) {
        let strCheck = lowerStr[index] === lowerStr[lowerStr.length - (Number(index) + 1)];
        if (!strCheck) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('_eypxpye'));
