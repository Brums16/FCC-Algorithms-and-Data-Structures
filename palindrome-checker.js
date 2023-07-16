function palindrome(str) {
    let editedStr = str.toLowerCase().replaceAll(/\W/g, "").replaceAll(/_/g,"")
    let revStr = editedStr.split("").reverse().join("")
    return (revStr===editedStr);
}