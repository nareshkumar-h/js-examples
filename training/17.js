//calculate percentage
const marks = [10,31, 41];
let total = 0;
for(let m of marks){
    total = total +m;
}
console.log("Total:" , total);
let percentage = total /3;
console.log("Percentage:" , percentage);
console.log("Percentage(Round):" , Math.round(percentage));
console.log("Percentage(Floor):" , Math.floor(percentage));
console.log("Percentage(Ceil):" , Math.ceil(percentage));
