function writeCards(stringNames, eventNames){
    let newArray = []
    for(let i = 0; i < stringNames.length;i++){
        newArray.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventNames } gift!`);
       
    }
    return newArray;
}

function countDown (number){
    let i = number;
    while(i >= 0){
        console.log(i)
        i--;
    }
}
