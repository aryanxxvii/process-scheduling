// priorityNonPreemptive.js

function calculatePriorityNonPreemptive(arrivalTime, burstTime, priority) {
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

  const jobs = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => priority[a] - priority[b]
  )

  for (const job of jobs) {
    currentTime = Math.max(currentTime, arrivalTime[job])
    finishTime[job] = currentTime + burstTime[job]
    turnaroundTime[job] = finishTime[job] - arrivalTime[job]
    waitingTime[job] = turnaroundTime[job] - burstTime[job]
    currentTime = finishTime[job]
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

export { calculatePriorityNonPreemptive }
