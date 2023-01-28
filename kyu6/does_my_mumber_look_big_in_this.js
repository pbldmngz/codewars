function narcissistic(value) {
  const stringInt = value.toString();
  const poweredArray = stringInt.split("").map((char) => {
    return Math.pow(parseInt(char), stringInt.length)
  })
  return poweredArray.reduce((a, b) => a + b) === value;
}
