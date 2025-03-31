let msg = [['I', 'B', 'C', 'A', 'L', 'K', 'A'],
 ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
 ['G', 'H', 'O', 'E', 'L', 'A', 'D']]

function decode(message) {
    let msg = []
  
    let rows = message.length
    let column = message[0].length
    let i = 0;
    let j = 0
    let count = 0
  
    if(rows === 0)  return ''
    if(column === 0) return ''
  
    while(count < column){
      
      msg = message[i][j]
      if(i < rows){
        i++;
      }else{
        i--
      }
      count++
      j++
    }
    
    return message.join('')
  }

  decode(msg)