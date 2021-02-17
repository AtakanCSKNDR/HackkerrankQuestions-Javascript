let bill = [3, 10, 2, 9];
let indexOfAnnaDoesNotEat = 1;
let contributedOfAnna = 7;

function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  var total = bill.reduce(function (a, b) {return a + b;}, 0) / 2;
  total != b ? console.log(b - total) : console.log("Bon Appetit");
}

bonAppetit(bill, indexOfAnnaDoesNotEat, contributedOfAnna);
