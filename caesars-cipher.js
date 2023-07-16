function rot13(str) {
    let strArray = str.split("")
    let myRegex = /[A-Z]/
    for(let i = 0;i<strArray.length;i++){
      if (myRegex.test(strArray[i])){
        if (strArray[i].charCodeAt(0)>=78){
        strArray[i]=String.fromCharCode(strArray[i].charCodeAt(0)-13)
      } else if (strArray[i].charCodeAt(0)<78){
        strArray[i]=String.fromCharCode(strArray[i].charCodeAt(0)+13)
      }
    }
    
}  

return(strArray.join(""))
}
  rot13("SERR PBQR PNZC");