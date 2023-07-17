function telephoneCheck(str) {
    console.log(str)
    let subStr = str
    if (str.charAt(0)==="1"){
        subStr = str.substring(1)
        console.log(subStr)
    }
    let myRegex = /^\s*(\d{3}|\(\d{3}\))-*\s*\d{3}-*\s*\d{4}$/
    console.log(myRegex.test(subStr))
    return (myRegex.test(subStr))
    

}
  
telephoneCheck("2 (757) 622-7382");