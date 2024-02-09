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

  function draw(i) {
    if (turn%2 != 0) {
      document.getElementById(boxs[i]).innerHTML = "o"
    } 
    if (turn%2 == 0) {  
    document.getElementById(boxs[i]).innerHTML = "x"
    }
    turn = turn + 1
  }

  const player = {
    turn1:"turn1",
    turn2:"turn2",
    turn3:"turn3",
    turn4:"turn4",
    turn5:"turn5"
  }


}
