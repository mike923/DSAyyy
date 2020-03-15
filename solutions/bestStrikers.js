const strikers = require('../data/bestStrikers')

const bestStrikers = (arr) => {
  let maxGoals = 0;

  for (let i = 0; i < arr.length; i++) {
    if (maxGoals < arr[i].goals) {
      maxGoals = arr[i].goals
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].differenceInSalary = (maxGoals - arr[i].goals) * 20000 + (arr[i].penalties * 25000)
  }

  arr.sort((a, b) => {
    const comparison = a.differenceInSalary - b.differenceInSalary
    if (comparison === 0) {
      const secondComparison = b.goals - a.goals
      return secondComparison
    }
    return comparison
  })
  console.log(maxGoals)
  return arr
}

console.log(bestStrikers(strikers))
