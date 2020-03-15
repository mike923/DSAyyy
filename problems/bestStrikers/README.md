# Best Strikers

## Problem

At the end of the season a soccer team has all of the stats of their players. Create an algorithm that will take in all the data of the strikers and return a sorted array of all the strikers data sorted by the difference in their salary. For each goal a player gets $20,000 and for each penalty the players has to pay $25,000. If two players have the same difference in salary then the one with the higher goals comes first.

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
    name: "Open Source",
    goals: 74,
    penalties: 15,
  },
  {
    name: "Egg Easter",
    goals: 63,
    penalties: 5,
  },
  {
    name: "Mark Expo",
    goals: 78,
    penalties: 18,
  },
];
```

### Output

```js
[
  'Egg Easter',
  'Mark Expo',
  'Open Source',
  'Gree Bun',
  'Oval Redd',
  'Speak Chet'
]
```
