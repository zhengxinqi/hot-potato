let time = 0
input.onButtonPressed(Button.A, function () {
    time = randint(5, 15)
    basic.showIcon(IconNames.Happy)
    while (time > 0) {
        time += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Sad)
})
