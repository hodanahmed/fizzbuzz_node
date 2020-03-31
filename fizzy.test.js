const Fizzbuzz = require('./fizzy');
  test('Divisble by Three = Fizz', () => {
    fizzBuzz = new Fizzbuzz
    expect(fizzBuzz.play(3)).toBe("Fizz")
  });
  test('Divisble by Five = Buzz', () => {
    fizzBuzz = new Fizzbuzz
    expect(fizzBuzz.play(5)).toBe("Buzz")
  });
  test('Divisble by Fifteen = Fizzbuzz', () => {
    fizzBuzz = new Fizzbuzz
    expect(fizzBuzz.play(30)).toBe("Fizzbuzz")
  });
