// task-1 calculator
function cashOut(money) {
    if (typeof money === 'number') {
        if (money < 0) {
            return "Invalid"
        }
        const result = money * 1.75 / 100
        return result
    }
    else {
        return "Invalid"
    }
}
// task-2
function validEmail(email) {
    if (typeof email === 'string') {
        const charecter='-._+@'
        if (charecter.includes(email[0])) {
            return false
        }
        else if (!email.endsWith('.com')&& !email.includes('@')) {
            return false
        }
        else if(email.includes(' ')){
            return false

        }
        else{
            return true
        }
    }
    else{
        return "Invalid"
    }
}

// task3
function electionResult(votes) {
    if (Array.isArray(votes) === true) {
        let mango = 0;
        let banana = 0;
        for (vote of votes) {
            if (vote === 'mango') {
                mango++;

            }
            else if (vote === 'banana') {
                banana++;
            }

        }
        if (mango > banana) {
            return "Mango"

        }
        else if (banana > mango) {
            return "Banana"
        }
        else {
            return "Draw"
        }



    }
    else {
        return "Invalid"
    }
}
// task-4
function isBestFriend(f1, f2) {
    if (typeof f1 === 'object' && typeof f2 === 'object' && !Array.isArray(f1) && !Array.isArray(f2)) {
        if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
            return true

        }
        else {
            return false
        }

    }
    else {
        return 'Invalid'
    }
}
// task 5
function calculateWatchTime(times) {
    if (Array.isArray(times) === true) {
        const lastResult = {
            hour: 0,
            minute: 0,
            second: 0
        }
        let totalTimeSec = 0
        for (const time of times) {
            if (typeof time === 'number' && time > 0) {
                totalTimeSec += time
            }
            else {
                return "Invalid"
            }


        }

        const hour = parseInt(totalTimeSec / 3600)
        lastResult.hour = hour;
        const remainingMinute = totalTimeSec % 3600
        const minute = parseInt(remainingMinute / 60)
        lastResult.minute = minute
        const second = remainingMinute % 60
        lastResult.second = second

        return lastResult

    }
    else {
        return "Invalid"
    }
}








