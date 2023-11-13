function checkPalindrome() {
    const number = document.getElementById('numberInput').value;

    if (isPalindrome(number)) {
        document.getElementById('result').textContent = number + ' is a palindrome';
    } else {
        document.getElementById('result').textContent = number + ' is not a palindrome';
    }
}

function isPalindrome(number) {
    const reversedNumber = number.toString().split('').reverse().join('');
    if(number == reversedNumber){
        return true;
    }
    else{
        return false;
    }
}