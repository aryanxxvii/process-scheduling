# process-scheduling
An npm package to calculate turn-around time and waiting time for common CPU scheduling algorithms
```js
const arrivalTime = [0, 1, 2]
const burstTime = [4, 3, 5]
const priority = [2, 1, 3]
const timeQuantum = 3
```

```js
const fcfs = calculateFCFS(arrivalTime, burstTime)
  const rr = calculateRoundRobin(arrivalTime, burstTime, timeQuantum)
  const pnp = calculatePriorityNonPreemptive(arrivalTime, burstTime, priority)
  const pp = calculatePriorityPreemptive(arrivalTime, burstTime, priority)
  const sjf = calculateShortestJobFirst(arrivalTime, burstTime)
  console.table(fcfs)
  console.table(rr)
  console.table(pnp)
  console.table(pp)
  console.table(sjf)
```

```ruby
┌─────────┬─────────┬─────────────┬───────────┬────────────┬────────────────┬─────────────┐
│ (index) │   Job   │ ArrivalTime │ BurstTime │ FinishTime │ TurnaroundTime │ WaitingTime │
├─────────┼─────────┼─────────────┼───────────┼────────────┼────────────────┼─────────────┤
│    0    │ 'Job 1' │      0      │     4     │     4      │       4        │      0      │
│    1    │ 'Job 2' │      1      │     3     │     7      │       6        │      3      │
│    2    │ 'Job 3' │      2      │     5     │     12     │       10       │      5      │
└─────────┴─────────┴─────────────┴───────────┴────────────┴────────────────┴─────────────┘
┌─────────┬─────────┬─────────────┬───────────┬────────────┬────────────────┬─────────────┐
│ (index) │   Job   │ ArrivalTime │ BurstTime │ FinishTime │ TurnaroundTime │ WaitingTime │
├─────────┼─────────┼─────────────┼───────────┼────────────┼────────────────┼─────────────┤
│    0    │ 'Job 1' │      0      │     4     │     10     │       10       │      6      │
│    1    │ 'Job 2' │      1      │     3     │     6      │       5        │      2      │
│    2    │ 'Job 3' │      2      │     5     │     12     │       10       │      5      │
└─────────┴─────────┴─────────────┴───────────┴────────────┴────────────────┴─────────────┘
┌─────────┬─────────┬─────────────┬───────────┬──────────┬────────────┬────────────────┬─────────────┐
│ (index) │   Job   │ ArrivalTime │ BurstTime │ Priority │ FinishTime │ TurnaroundTime │ WaitingTime │
├─────────┼─────────┼─────────────┼───────────┼──────────┼────────────┼────────────────┼─────────────┤
│    0    │ 'Job 1' │      0      │     4     │    2     │     8      │       8        │      4      │
│    1    │ 'Job 2' │      1      │     3     │    1     │     4      │       3        │      0      │
│    2    │ 'Job 3' │      2      │     5     │    3     │     13     │       11       │      6      │
└─────────┴─────────┴─────────────┴───────────┴──────────┴────────────┴────────────────┴─────────────┘
┌─────────┬─────────┬─────────────┬───────────┬──────────┬────────────┬────────────────┬─────────────┐
│ (index) │   Job   │ ArrivalTime │ BurstTime │ Priority │ FinishTime │ TurnaroundTime │ WaitingTime │
├─────────┼─────────┼─────────────┼───────────┼──────────┼────────────┼────────────────┼─────────────┤
│    0    │ 'Job 1' │      0      │     4     │    2     │     7      │       7        │      3      │
│    1    │ 'Job 2' │      1      │     3     │    1     │     4      │       3        │      0      │
│    2    │ 'Job 3' │      2      │     5     │    3     │     12     │       10       │      5      │
└─────────┴─────────┴─────────────┴───────────┴──────────┴────────────┴────────────────┴─────────────┘
┌─────────┬─────────┬─────────────┬───────────┬────────────┬────────────────┬─────────────┐
│ (index) │   Job   │ ArrivalTime │ BurstTime │ FinishTime │ TurnaroundTime │ WaitingTime │
├─────────┼─────────┼─────────────┼───────────┼────────────┼────────────────┼─────────────┤
│    0    │ 'Job 1' │      0      │     4     │     8      │       8        │      4      │
│    1    │ 'Job 2' │      1      │     3     │     4      │       3        │      0      │
│    2    │ 'Job 3' │      2      │     5     │     13     │       11       │      6      │
└─────────┴─────────┴─────────────┴───────────┴────────────┴────────────────┴─────────────┘
```
