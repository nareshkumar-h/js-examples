class Addition{
   
    add(c,d){
        console.log("2nd method")
    }
    add(a,b){
        var c = a +b;
        console.log("Result:" + c);
    }
}
var additionObj = new Addition();
additionObj.add(3,5);
additionObj.add(4,"Naresh");