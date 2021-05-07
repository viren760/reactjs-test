//q2 --(a)  Find the maximum consecutive 1's in an array of 0's and 1's --------


function question2(array)
{
      
    var count = 0; 
    var result = 0; 
    
    for (var i = 0; i < array.length; i++)
    {
        if (array[i] == 0){
            count = 0;
        }
            
        else
        {
            count++;//increase count
            result = Math.max(result, count);
        }
    }
  
    console.log( result);
}

question2([0,0,1,1,0,0,0,1,0,0,1,1,1,0]);