
const gridTravel = (m,n) => {
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;
  return gridTravel(m-1,n) + gridTravel(m,n -1)
}

console.log(gridTravel(1,1))
console.log(gridTravel(2,3))
console.log(gridTravel(4,4))
console.log(gridTravel(10,10))