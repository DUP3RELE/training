function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonLength = gcd(str1.length, str2.length);
    
    return str1.slice(0, commonLength);
}
function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonLength = gcd(str1.length, str2.length);
    
    return str1.slice(0, commonLength);
}


const str1 = "ABCABC";
const str2 = "ABC";
const result = gcdOfStrings(str1, str2);
console.log(result);