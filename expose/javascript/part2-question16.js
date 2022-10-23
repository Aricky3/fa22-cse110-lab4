let statistics = {
    redCars:21,
    blueCars: 45,
    greenCars:12,
    raceCars:5,
    blckCars:40,
    rareCars:2
};

for(let i in statistics){
   // console.log(statistics[x]);
   if(i[0] == 'r' || statistics[i] % 2 == 1){
    console.log(statistics[i]);
   };
};
