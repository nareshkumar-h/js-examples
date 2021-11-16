class Addition{
   
    add(a,b){
        var c = a +b;
        return c;
        
    }
}
var additionObj = new Addition();
// I didnt store the returned value
additionObj.add(3,5);
// I am storing the returned value
var result = additionObj.add(4,4);
console.log("Result:"+ result);

