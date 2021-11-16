//what is the use of break ?
var departments = ["Naresh", "Siva", "Prabhu"];

//Check whether the name "Siva" exists
let searchName = "Siva";
let exists = false;
for(let dept of departments){
    if ( dept == searchName){
        console.log("Search Found");
        continue;
    }
    console.log(dept);
    
}