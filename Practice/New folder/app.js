const positionsCopy = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const random =[];
let i = 0;

while (i < 4) {
    let num = Math.floor(Math.random() * 9);
    console.log("random number GEnerated",num);
    
    if(positionsCopy[num]!== 99){
        random.push(num);
        positionsCopy[num]=99
        i++;
    }
}

for(let i=0;i<random.length;i++){
console.log("final random array:",random[i]);
}



