
//  https://github.com/Arafat-Araf/assignmentjs

 // kilometerToMeter Problem Solving
 function kilometerToMeter(kilometer){
     var getMeter = kilometer * 1000;
    return getMeter;
 }
 var resultMeter = kilometerToMeter(2);
 console.log(resultMeter);


 // budgetCalculator problem solving
 function budgetCalculator(watch, phone, laptop) {
     var watchPrice = watch * 50;
    var phonePrice = phone * 100;
     var laptopPrice = laptop * 500;
    var getTotalPrice = watchPrice + phonePrice + laptopPrice;
    return getTotalPrice;
 }

 var myBudgetResult = budgetCalculator(1, 2, 3);


 // megaFriend Problem Solving
function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}
var myMegaFriend = megaFriend([
    'Mohibullah Munshi',
    'Sajida Jannati',
    'Sharmin Akter',
]);


console.log(myMegaFriend);
