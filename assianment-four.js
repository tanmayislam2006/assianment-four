function cashOut(money) {
    if (money < 0 || typeof money != 'number') {
        return "Invalid"
    }
    let result = money * 1.75 / 100
    return result
}
function validEmail(email) {
    if (typeof email === 'string') {
        const charecter = '-._+@'
        if (charecter.includes(email[0])) {
            return false
        }
        else if (!email.endsWith('.com') || !email.includes('@')) {
            return false
        }
        else if (email.includes(' ')) {
            return false

        }
        else {
            return true
        }
    }
    else {
        return "Invalid"
    }
}
function electionResult(votes) {
    if (Array.isArray(votes) != true) {
        return "Invalid"
    }
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

    return "Draw"

}
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
function calculateWatchTime(times) {
    if (Array.isArray(times) != true) {
        return "Invalid"
    }
    let totalTimeSec = 0
    for (const time of times) {
        if (typeof time === 'number' && time >= 0) {
            totalTimeSec += time
        }
        else {
            return "Invalid"
        }
    }
    const hour = parseInt(totalTimeSec / 3600)
    const remainingMinute = totalTimeSec % 3600
    const minute = parseInt(remainingMinute / 60)
    const second = remainingMinute % 60
    return {hour,minute,second}

}