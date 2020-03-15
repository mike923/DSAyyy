# Best Strikers

## Problem

At the end of the season a soccer team has all of the stats of their players. Create an algorithm that will take in all the data of the strikers and return a sorted array of all the strikers data sorted by the difference in their salary. For each goal a player gets $20,000 and for each penalty the players has to pay $25,000.

The formula to get the difference in salary is:

> ((max*goals - player_goals) * 20000) + (player*penalties * 25000)

## Example

### Input

```js
const strikers = [
  {
    name: "Gree Bun",
    goals: 72,
    penalties: 14,
  },
  {
    name: "Speak Chet",
    goals: 78,
    penalties: 19,
  },
  {
    name: "Oval Redd",
    goals: 67,
    penalties: 10,
  },
  {
    name: "Mark Expo",
    goals: 78,
    penalties: 16,
  },
];
```

### Output

```js
[
  {
    name: "Mark Expo",
    goals: 78,
    penalties: 16,
    differenceInSalary: 400000,
  },
  {
    name: "Gree Bun",
    goals: 72,
    penalties: 14,
    differenceInSalary: 470000,
  },
  {
    name: "Oval Redd",
    goals: 67,
    penalties: 10,
    differenceInSalary: 470000,
  },
  {
    name: "Speak Chet",
    goals: 78,
    penalties: 19,
    differenceInSalary: 475000,
  },
];
```
