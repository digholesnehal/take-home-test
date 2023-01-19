const data = [
   "FIPS,HOUSEHOLD_SIZE,INCOME",
   "061,3,107656",
   "047,5,78962",
   "061,5,-1",
   "061,5,100810",
   "047,2,-1",
   "061,1,108400",
   "061,4,85320",
   "047,4,51954",
   "061,5,190116",
   "061,1,76084",
   "061,2,-1",
   "061,1,76502"
]

const ManhattanAvgIncome = function (info) {
   let manhattanIncome = 0;
   let totalManhattanData = 0;
   let missingManhattanData = 0;
   info.map(obj => {
      let val = obj.split(',');
      console.log("VALUE: ", val)
      if (val[0] === '061') {
         manhattanIncome += Number(val[2]) !== -1 ? Number(val[2]) : 0;
         ++totalManhattanData;
         Number(val[2]) === -1 && ++missingManhattanData;
      }
   })
   console.log("Missing data from Manhattan household is: ", (missingManhattanData * 100) / totalManhattanData);
   return manhattanIncome / (totalManhattanData - missingManhattanData);
}


console.log("Manhattan Average HouseHold Income: ", ManhattanAvgIncome(data))