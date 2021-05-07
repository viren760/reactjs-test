//Q1 --- Even number print -----
function question1(array){
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 ===0){
        console.log(array[i]);
      }
    }
  }

  question1([1,2,3,4,5]);
  