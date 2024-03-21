import {
  calculateFCFS,
  calculatePriorityNonPreemptive,
  calculateRoundRobin,
  calculatePriorityPreemptive,
  calculateShortestJobFirst,
} from "process-scheduling"

const arrivalTime = [0, 1, 2]
const burstTime = [4, 3, 5]
const priority = [2, 1, 3]
const timeQuantum = 3

try {
  const fcfs = calculateFCFS(arrivalTime, burstTime)
  const rr = calculateRoundRobin(arrivalTime, burstTime, timeQuantum)
  const pnp = calculatePriorityNonPreemptive(arrivalTime, burstTime, priority)
  const pp = calculatePriorityPreemptive(arrivalTime, burstTime, priority)
  const sjf = calculateShortestJobFirst(arrivalTime, burstTime)
  console.table(fcfs) // Display the schedule table
  console.table(rr) // Display the schedule table
  console.table(pnp) // Display the schedule table
  console.table(pp) // Display the schedule table
  console.table(sjf) // Display the schedule table
} catch (error) {
  console.error(error.message)
}
