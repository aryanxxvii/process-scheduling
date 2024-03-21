// roundRobin.js

function calculateRoundRobin(arrivalTime, burstTime, timeQuantum) {
  if (arrivalTime.length !== burstTime.length) {
    throw new Error(
      "Arrival time and burst time arrays must have equal lengths"
    )
  }

  const n = arrivalTime.length
  let remainingTime = [...burstTime]
  let currentTime = 0
  let finishTime = Array(n).fill(0)
  let turnaroundTime = Array(n).fill(0)
  let waitingTime = Array(n).fill(0)

  while (true) {
    let allJobsDone = true

    for (let i = 0; i < n; i++) {
      if (remainingTime[i] > 0) {
        allJobsDone = false

        const executeTime = Math.min(remainingTime[i], timeQuantum)
        remainingTime[i] -= executeTime
        currentTime += executeTime

        if (remainingTime[i] === 0) {
          finishTime[i] = currentTime
        }
      }
    }

    if (allJobsDone) {
      break
    }
  }

  for (let i = 0; i < n; i++) {
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

export { calculateRoundRobin }
