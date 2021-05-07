var items = [
    {
     "id": 4,
     "name": "abc"},
    {
     "id": 10,
     "name": "ab2"},
    {
     "id": 5,
     "name": "abc3"},
    {
     "id": 6,
     "name": "abc5"}
    ];

    function question5(property) {
        return function(a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
     }

items.sort(question5('id')); 
console.log(items); 


   