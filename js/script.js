
var vacationType = prompt("What kind of trip would you like to go on musical, tropical, or adventurous?");
var groupSize = prompt("How many are in your group?");
 
if (vacationType === "musical") {
    destination = "New Orleans";
} else if (vacationType === "tropical") {
    destination = "beach vacation in Mexico";
} else if (vacationType === "adventurous") {
    destination = "whitewater rafting the Grand Canyon";
} else  {
    alert("Your answer must be musical, tropical, or adventurous!");
}

if (groupSize >= 1 && groupSize <=2) {
    suggestion = "first class";
} if (groupSize >=3 && groupSize <= 5) {
    suggestion = "helicopter";
} if (groupSize > 6) {
    suggestion = "charter flight";
}

var result = `Since you're a group of ${groupSize} going on a ${vacationType} vacation, you should take ${suggestion} to ${destination}.`;
console.log(result);