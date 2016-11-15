
let fetchValue = function(x, y) {

 
  if((x < 4 && y <= x) || (x == 4 && y < 3)) return 3
  if(x == 5 && y == 2) return 6
  if(x > 5 && y < 3) return 1
  if((x > 3 && x < 8 && y == 3) || (x == 4 && y == 4)) return 2
  if(x == 6 && y == 4) return 5
 // if((x > 2 && x < 4 && y > 3 && y < 8 ) || (x > 3 && x < 5 && y > 4 && y < 8) || (x > 4 && x < 6 && y > 3 && y < 8)) return 4
  if(x > 3 && x < 6 && y > 3 && y < 8 && !(y == 4 && x == 4)) return 4
 // if(x < 4 && y > 7 && !(x > 1 && x < 4 && y > 7 && y < 9)) return 7 nav pareizs
  if( y - 7 >= x ) return 7
  if ( x > 6 && y > 4 && y < 9) return 6
  if(x > 5 && y > 8) return 1
  
}

let value = fetchValue(8, 10)

// x pa labi
// y uz leju
