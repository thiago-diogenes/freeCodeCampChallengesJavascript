function palindrome(str) {
    [...str]
        .filter((currValue) => {
            return currValue.match(/^[0-9a-zA-Z]+$/);
        })
        .map((currValue, index, arr) => {
            if (!(currValue === arr[arr.length - (Number(index) + 1)])) {
                return false;
            }
        });
    return true;
}

console.log(palindrome('_eypxpye'));
