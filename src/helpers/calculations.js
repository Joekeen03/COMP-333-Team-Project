// get wage - deductions(taxes, SS, etc)
export let getDeduction = (totalWage, deductPercent) => {
    return Math.round(totalWage * deductPercent)
}

// get portion of salary owed over the course of the pay period (in weeks)
export let getPayForSalary = (totalWage, payPeriod) => {
    return Math.round(totalWage / (52 / payPeriod))
}

// get wage * hours worked. (set to payPeriod = 40hr weeks for now)
export let getPayForHourly = (totalWage, totalWorkWeeks, totalHours) => {
    return Math.round(totalWage / (totalWorkWeeks * totalHours))
}