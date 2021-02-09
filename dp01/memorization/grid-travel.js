const gridTravel = (m,n,memo={}) => {
  const key = m+","+n;

  if(key in memo) return memo[key]
  if(m === 1 && n===1) return 1;
  if(m === 0 || n===0) return 0
  
  memo[key] = gridTravel(m-1,n,memo) + gridTravel(m,n-1,memo)
  return memo[key]
}


console.log(gridTravel(1,1))
console.log(gridTravel(2,3))
console.log(gridTravel(4,4))
console.log(gridTravel(10,10))
console.log(gridTravel(18,18))