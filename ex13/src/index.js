function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

randomRangeNumber(4, 9);

module.exports = randomRangeNumber;
