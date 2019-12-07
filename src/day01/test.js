//const fs = require("fs");

// const input = fs.readFileSync('/home/ec2-user/repos/advent-of-code-2019/input/input01.txt', 'UTF-8');
import input from './input';
// const getInput = () => input.split('\n').map(Number);
const getInput = () => input.split('\n').map(Number);
console.log(getInput);

const getFuel = n => Math.floor(n / 3 - 2);

const getFuelTotal = n => {
  const fuel = getFuel(n);
  return fuel > 0 ? fuel + getFuelTotal(fuel) : 0;
};

const sum = (a, b) => a + b;

console.log(getInput().map(getFuel).reduce(sum));

//export default {
  //part1: () =>
    //'Sum of the fuel requirements: ' +
    //getInput()
      //.map(getFuel)
      //.reduce(sum),
  //part2: () =>
    //'Sum of the fuel requirements: ' +
    //getInput()
      //.map(getFuelTotal)
      //.reduce(sum)
//};
