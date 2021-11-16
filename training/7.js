//How to create arrays and store department names
//String [] deptNames = { "CSE","EEE", "IT"};
let deptNames = ["CSE","EEE","IT"];
console.log("Department Names:", deptNames);
// Index
console.log("0th index:" + deptNames[0]);
console.log("1st index:" + deptNames[1]);
//Iterate arrays
console.log("###### for loop ######");
for(var i=0;i<deptNames.length; i++){
    let dept = deptNames[i];
    console.log(dept);
}

