// priorityPreemptive.js

function calculatePriorityPreemptive(arrivalTime, burstTime, priority) {
  if (
    arrivalTime.length !== burstTime.length ||
    arrivalTime.length !== priority.length
  ) {
    throw new Error(
      "Arrival time, burst time, and priority arrays must have equal lengths"
    )
  }

  const n = arrivalTime.length
  let currentTime = 0
  let finishTime = Array(n).fill(0)
  let turnaroundTime = Array(n).fill(0)
  let waitingTime = Array(n).fill(0)
  let remainingTime = [...burstTime]

  while (true) {
    let minPriority = Number.MAX_SAFE_INTEGER
    let selectedJob = -1
    let allJobsDone = true

    for (let i = 0; i < n; i++) {
      if (
        remainingTime[i] > 0 &&
        arrivalTime[i] <= currentTime &&
        priority[i] < minPriority
      ) {
        minPriority = priority[i]
        selectedJob = i
        allJobsDone = false
      }
    }

    if (allJobsDone) {
      break
    }

    remainingTime[selectedJob]--

    if (remainingTime[selectedJob] === 0) {
      finishTime[selectedJob] = currentTime + 1
      turnaroundTime[selectedJob] =
        finishTime[selectedJob] - arrivalTime[selectedJob]
      waitingTime[selectedJob] =
        turnaroundTime[selectedJob] - burstTime[selectedJob]
    }

    currentTime++
  }

  const scheduleTable = arrivalTime.map((arrival, index) => ({
    Job: `Job ${index + 1}`,
    ArrivalTime: arrival,
    BurstTime: burstTime[index],
    Priority: priority[index],
    FinishTime: finishTime[index],
    TurnaroundTime: turnaroundTime[index],
    WaitingTime: waitingTime[index],
  }))

  return scheduleTable
}

export { calculatePriorityPreemptive }
