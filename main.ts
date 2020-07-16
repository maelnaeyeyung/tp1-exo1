input.onButtonPressed(Button.A, function () {
    if (X > 0) {
        if (Y == 0) {
            led.unplot(X, 0)
            X += -1
            led.plot(X, 0)
        } else if (Y == 1) {
            led.unplot(X, 0)
            X += -1
            led.plot(X, 0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (X < 4) {
        if (Y == 0) {
            led.unplot(X, 0)
            X += 1
            led.plot(X, 0)
        } else if (Y == 1) {
            led.unplot(X, 0)
            X += 1
            led.plot(X, 0)
        }
    }
})
let Y = 0
let X = 0
X = 0
basic.forever(function () {
    if (X == 4) {
        Y = 1
    } else if (X == 0) {
        Y = 0
    }
    if (Y == 0) {
        X += 1
    } else if (Y == 1) {
        X += -1
    }
    led.plot(X, 0)
    basic.pause(500)
    led.unplot(X, 0)
})
