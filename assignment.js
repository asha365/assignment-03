//assignment no-01
//1 kilometer = 1000 meter
function kilometerToMeter(meter){
    const kilo = meter / 1000;
    return kilo;
}
const result = kilometerToMeter(10000);
console.log(result);





//assignment no-02
function budgetCalculator(watch, phone, laptop){
    const handWatch = watch * 50;
    const androidPhone = phone * 100;
    const hpLaptop = laptop * 500;
    //all item calculation
    const total = handWatch + androidPhone + hpLaptop;
    return total; 
}
//all item total price
var output = budgetCalculator(2, 2, 1);
console.log(output);





//assignment no-03
function hotelCost(day){
var amount = 0;
if(day <= 10){
    //count 1 to 10 days
    amount = day * 100;
}
else if(day <= 20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    //count 11 to 20 days
    var secondPart = remaining * 80;
    amount = firstPart + secondPart;
}
else{
    
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = day - 20;
    //count 21 to undefined days
    var thirdPart = remaining * 50;
    amount = firstPart + secondPart + thirdPart;
    }
    return amount;
} 
var output = hotelCost(5);
console.log(output);




//assignment no-04
////largest name
function megaFriend(name){
    let result = '';
    //using for loop
    for(let i = 0; i < name.length; i++){
        let currentName = name[i];
        if(currentName.length > result.length){
            result = name[i];
        }
    }
    return result;
}
console.log(megaFriend(['shakil', 'mejba', 'ohiduzzaman', 'nabab uddin', 'rafi', 'sharmin']));