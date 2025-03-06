function writeCards(name, event){
    const madeArray = [];
    for(let i = 0; i < name.length; i++){
        madeArray[i] = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return madeArray;
}

function countDown(num){
    for(let i = num; i >= 0; i--){
        console.log(i);
    }
}