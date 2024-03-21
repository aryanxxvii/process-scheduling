// fcfs.js

function calculateFCFS(arrivalTime, burstTime) {
  if (arrivalTime.length !== burstTime.length) {
    throw new Error(
      "Arrival time and burst time arrays must have equal lengths"
    )
  }

  const n = arrivalTime.length
  let currentTime = 0
  let finishTime = []
  let turnaroundTime = []
  let waitingTime = []

  for (let i = 0; i < n; i++) {
    finishTime[i] = Math.max(currentTime, arrivalTime[i]) + burstTime[i]
    currentTime = finishTime[i]

    turnaroundTime[i] = finishTime[i] - arrivalTime[i]

    waitingTime[i] = turnaroundTime[i] - burstTime[i]
  }

  const scheduleTable = arrivalTime.map((arrival, index) => ({
    Job: `Job ${index + 1}`,
    ArrivalTime: arrival,
    BurstTime: burstTime[index],
    FinishTime: finishTime[index],
    TurnaroundTime: turnaroundTime[index],
    WaitingTime: waitingTime[index],
  }))

  return scheduleTable
}
export { calculateFCFS }
