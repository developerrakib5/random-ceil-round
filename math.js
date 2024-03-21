
// ?====================================> Math Power <=====================================
const result = Math.pow (3, 8); // Math Power use kora hoi aita diya power nirnoi kora jai
console.log(result);

// ?====================================> Math Abs Formula  <=====================================
const num1 = 25;
const num2 = 45;
const gap  = Math.abs(num1 - num2); // math abs use kora hoi jeno number ar man ta plus naki minus seita jeno na bujha jai
console.log(gap);
if (gap < 5){
    console.log('Tahole Tara friend Hoyte Parbe');
}
else{
    console.log('Tara Friends Hoyte Parbe Na');
}

// ?====================================> Math Round/ Formula  <=====================================
const number = 2.5598; // point er pore fiver ba tar ceye beshi kicu thakle seita round kore next level a niye jabe
const fullNumber = Math.round(number);
console.log(fullNumber);

// ?====================================> Math Ceilling Formula  <=====================================
const number1 = 2.401274;
const result1 = Math.ceil(number1); // Math Ceilling Use Kore Jei Man Ta ace Tar Uporer Man Tai Jawar Jonno Muloto Ai Ceil Ta Use Kora Hoi
console.log(result1);

// ?====================================> Math Floor Formula  <=====================================
const number2 = 2.014875;
const result2 = Math.floor(number2); // Math Floor Use Kore Jei Man Ta Thake I Mean Decimal Man Ta Ke Nicer Level A Niye Soman Kore Rakhe
console.log(result2);

// ?====================================> Math Random Formula  <=====================================
console.log(Math.random()); // system Number One

const number3 = Math.round(Math.random()*100);  // Random Ar Number Ta EkekSomoy EkekRokom Dite Parbe
console.log(number3);
