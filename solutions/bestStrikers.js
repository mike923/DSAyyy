const strikers = require('../data/bestStrikers')

const bestStrikers = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].goals) {
      max = arr[i].goals
    }
  }

  arr.sort((a, b) => b.goals - a.goals)

  console.log(max)

  return arr
}

console.log(bestStrikers(strikers))