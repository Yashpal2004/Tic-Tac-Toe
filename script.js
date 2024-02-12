window.onload = function() {
  const boxs = ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"]
  
  const win = [
    ["tl", "tc", "tr"],
    ["cl", "cc", "cr"],
    ["bl", "bc", "br"],
    ["tl", "cl", "bl"],
    ["tc", "cc", "bc"],
    ["tr", "cr", "br"],
    ["tl", "cc", "br"],
    ["bl", "cc", "bl"]
  ]

  let turn = 1

  for (const i in boxs) {
    document.getElementById(boxs[i]).addEventListener("click", () => {
      if (document.getElementById(boxs[i]).innerHTML != "o" && document.getElementById(boxs[i]).innerHTML != "x") {
        draw(i)
      }
    })
  }

  let player1 = []
  let player2 = []
  let player1Count = 0
  let player2Count = 0

  function draw(i) {
    if (turn%2 != 0) {
      document.getElementById(boxs[i]).innerHTML = "o"
      player1.push(boxs[i])
      player1Count = check(player1)
    } 
    if (turn%2 == 0) {  
      document.getElementById(boxs[i]).innerHTML = "x"
      player2.push(boxs[i])
      player2Count = check(player2)
    }
    turn = turn + 1
    console.log(player1Count)
    console.log(player2Count)
  }
  

  function check(a) {
    let count = 0
    if (turn > 4) {
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < a.length; j++) {
          for (let k = 0; k < 3; k++) {
            if (a[j] === win[i][k]) {
              count = count + 1
            }
          }
        }
        if (count === 3) {
          return count
        }
        count = 0
      }
    }
    return count;
  }
}
