class Fizzbuzz  {
  constructor(number) {
    this.number = number;
  }
};

Fizzbuzz.prototype._isDivisibleByThree = function (number) {
  return (number % 3 == 0);
};
Fizzbuzz.prototype._isDivisibleByFive = function (number) {
  return (number % 5 == 0);
};
Fizzbuzz.prototype._isDivisibleByFifteen = function (number) {
  return (number % 15 == 0);
};


Fizzbuzz.prototype.play = function(number) {

if (this._isDivisibleByFifteen(number)){
    return "Fizzbuzz";
}
if(this._isDivisibleByThree(number)){
  return "Fizz";
}
if (this._isDivisibleByFive(number)){
  return "Buzz";
}
  return number;
};


module.exports = Fizzbuzz;
