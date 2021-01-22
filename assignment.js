// https://github.com/ibrahimkhalilik748/assignment


// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var toMeter = kilometerToMeter(10);
 console.log(toMeter);


//   budgetCalculator
function budgetCalculator(handwatch, mobile, laptop){
    var watch = handwatch * 50;
    var phone = mobile * 100;
    var mimiPc = laptop * 500;
    var tutalPrice = watch + phone + mimiPc;
    return tutalPrice;
}
var calculator = budgetCalculator(10,10,10)
console.log(calculator);



//  hotelCost
function hotelCost (days){
    var price = 0;
    if (days <= 10) {
        price = days * 100;
    }
    else if (days <= 20){
        var firstTenDay = 10 * 100;
        var remaining = days - 10;
        var secondTenDay = remaining * 80;
        price = firstTenDay + secondTenDay;
    }
    else {
        var firstTenDay = 10 * 100;
        var secondTenDay  = 10 * 80;
        var remaining = days - 20;
        var thirdTenDay = remaining * 50;
        price = firstTenDay + secondTenDay + thirdTenDay;
    }
     return price;
    }
    var count = hotelCost(21);
    console.log(count);



//  megaFriend
// function megaFriend (friendList){  
    var friendList = ["sohag", "kawsar", "mohammadali", "himal", "liton", "juwel", "rakib", "shagor", "shakil",]
        var max = friendList[0];
        var maximum = friendList[0].length;
        for (var i = 0; i<friendList.length; i++){
            var element = friendList[i];
            if(element > max){
                max = element;
                return max;
            }
        }
console.log(max);