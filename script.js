
const input = document.getElementById("date-input")
const output = document.getElementById("output")

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_MONTH = ONE_DAY * 30
const ONE_YEAR = ONE_MONTH * 12

function calculateRemainingTime(referenceDate, todayDate) {
    
    let timeLeft = referenceDate - todayDate

    let yearsLeft = 0
    while (timeLeft > ONE_YEAR) {
        yearsLeft++
        timeLeft -= ONE_YEAR
    }

    let monthsLeft = 0
    while (timeLeft > ONE_MONTH) {
        monthsLeft++
        timeLeft -= ONE_MONTH
    }

    let daysLeft = 0
    while (timeLeft > ONE_DAY) {
        daysLeft++
        timeLeft -= ONE_DAY
    }

    let hoursLeft = 0
    while (timeLeft > ONE_HOUR) {
        hoursLeft++
        timeLeft -= ONE_HOUR
    }

    let minutesLeft = 0
    while (timeLeft > ONE_MINUTE) {
        minutesLeft++
        timeLeft -= ONE_MINUTE
    }

    let secondsLeft = 0
    while (timeLeft > ONE_SECOND) {
        secondsLeft++
        timeLeft -= ONE_SECOND
    }

    return {
        yearsLeft,
        monthsLeft,
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft
    }
}

function textBuilder(remainingTime) {
    let result = []

    if (remainingTime.yearsLeft > 0) {
        if (remainingTime.yearsLeft > 1) {
            result.push(`${yearsLeft} years`)
        } else {
            result.push(`${yearsLeft} year`)
        }
    }

    if (remainingTime.monthsLeft > 0) {
        if (remainingTime.monthsLeft > 1) {
            result.push(`${monthsLeft} months`)
        } else {
            result.push(`${monthsLeft} month`)
        }
    }

    if (remainingTime.daysLeft > 0) {
        if (remainingTime.daysLeft > 1) {
            result.push(`${daysLeft} days`)
        } else {
            result.push(`${daysLeft} day`)
        }
    }

    if (remainingTime.hoursLeft > 0) {
        if (remainingTime.hoursLeft > 1) {
            result.push(`${hoursLeft} hours`)
        } else {
            result.push(`${hoursLeft} hour`)
        }
    }

    if (remainingTime.minutesLeft > 0) {
        if (remainingTime.minutesLeft > 1) {
            result.push(`${minutesLeft} minutes`)
        } else {
            result.push(`${minutesLeft} minute`)
        }
    }

    if (remainingTime.secondsLeft > 0) {
        if (remainingTime.secondsLeft > 1) {
            result.push(`${secondsLeft} minutes`)
        } else {
            result.push(`${secondsLeft} minute`)
        }
    }
}

const dataReferencia = new Date("2028", "01", "01").getTime()
const dataHoje = new Date().getTime()

let resultado = calculateRemainingTime(dataReferencia, dataHoje)
console.log(resultado)