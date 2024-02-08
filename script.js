window.onload = function() {
  const boxs = ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"]
  
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
}
