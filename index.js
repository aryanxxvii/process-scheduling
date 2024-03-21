// index.js

import { calculateFCFS } from "./lib/fcfs.js"
import { calculateRoundRobin } from "./lib/roundRobin.js"
import { calculateShortestJobFirst } from "./lib/shortestJobFirst.js"
import { calculatePriorityNonPreemptive } from "./lib/priorityNonPreemptive.js"
import { calculatePriorityPreemptive } from "./lib/priorityPreemptive.js"

export {
  calculateFCFS,
  calculateRoundRobin,
  calculateShortestJobFirst,
  calculatePriorityNonPreemptive,
  calculatePriorityPreemptive,
}
