//Arrays - add , remove, get
//String [] departments = new String[3];
//departments[0]="CSE";
//departments[1]="EEE";

let departments = [];
//Add Data
departments.push("CSE");
departments.push("EEE");
console.log(departments);
console.log("no of items:" , departments.length);
console.log("search - exists:" , departments.includes("CSE"));

if (departments.includes("CSE")){
    console.log("The given department CSE is present");
}
else {
    console.log("CSE department not found");
}