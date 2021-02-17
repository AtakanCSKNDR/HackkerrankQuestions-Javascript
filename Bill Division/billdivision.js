let bill = [3, 10, 2, 9];
let indexOfAnnaDoesNotEat = 1;
let contributedOfAnna = 12;

function bonAppetit(bill, k, b) {
  let total = 0;
  bill.splice(k, 1);
  bill.forEach((element) => (total += element));
  total / 2 != b ? console.log(b - total / 2) : console.log("Bon Appetit");
}

bonAppetit(bill, indexOfAnnaDoesNotEat, contributedOfAnna);
