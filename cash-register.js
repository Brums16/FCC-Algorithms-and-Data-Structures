function checkCashRegister(price, cash, cid) {
    cash*=100
    price*=100
    let changeOwed=cash-price
    console.log(changeOwed)
    let totalCid = 0
    for (let i = 0;i<cid.length;i++){
        cid[i][1]*=100
        totalCid += cid[i][1]
    }
    console.log(totalCid)
    let result = {
        status: "",
        change: []
    }   
    if (changeOwed === totalCid){
        for (let i = 0;i<cid.length;i++){
          cid[i][1]/=100
      }
        result.status = "CLOSED"
        result.change = cid
        console.log(result)
        return result
    }
    let changeArray = [
        [ 'ONE HUNDRED', 0 ],
        [ 'TWENTY', 0 ],
        [ 'TEN', 0 ],
        [ 'FIVE', 0 ],
        [ 'ONE', 0 ],
        [ 'QUARTER', 0 ],
        [ 'DIME', 0 ],
        [ 'NICKEL', 0 ],
        [ 'PENNY', 0 ]
      ]
    while (changeOwed >= 10000 && cid[8][1]>=10000){
        changeArray[0][1]+=10000
        cid[8][1]-=10000
        changeOwed-=10000
    }
    while (changeOwed >= 2000 && cid[7][1]>=2000){
        changeArray[1][1]+=2000
        cid[7][1]-=2000
        changeOwed-=2000
    }
    while (changeOwed >= 1000 && cid[6][1]>=1000){
        changeArray[2][1]+=1000
        cid[6][1]-=1000
        changeOwed-=1000
    }
    while (changeOwed >= 500 && cid[5][1]>=500){
        changeArray[3][1]+=500
        cid[5][1]-=500
        changeOwed-=500
    }
    while (changeOwed >= 100 && cid[4][1]>=100){
        changeArray[4][1]+=100
        cid[4][1]-=100
        changeOwed-=100
    }
    while (changeOwed >= 25 && cid[3][1]>=25){
        changeArray[5][1]+=25
        cid[3][1]-=25
        changeOwed-=25
    }
    while (changeOwed >= 10 && cid[2][1]>=10){
        changeArray[6][1]+=10
        cid[2][1]-=10
        changeOwed-=10
    }
    while (changeOwed >= 5 && cid[1][1]>=5){
        changeArray[7][1]+=5
        cid[1][1]-=5
        changeOwed-=5
    }
    while (changeOwed > 0 && cid[0][1]>=1){
        changeArray[8][1]+=1
        cid[0][1]-=1
        changeOwed-=1
    }
    console.log(changeArray)
    for(let j=0;j<changeArray.length;j++){
      changeArray[j][1]/=100
    }
    for(let k=0;k<changeArray.length;){
      if (changeArray[k][1]===0){
        changeArray.splice(k,1)
      } else {k++}
    }
    console.log(changeArray)
    if (changeOwed===0){
        result.status = "OPEN"
        result.change = changeArray
        console.log(result)
        return result
    }
    result.status = "INSUFFICIENT_FUNDS"
        console.log(result)
        return result
  }
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])