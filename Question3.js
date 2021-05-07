function duplicateNumber(array){

    for(var i=1; i<array.length; i++){
        if(array[i] === array[i-1]){
            console.log("Repeated number is = "+array[i]);
           break;
        }
    }
}

duplicateNumber([0,1,2,3,4,5,6,7,7,8,9,10])