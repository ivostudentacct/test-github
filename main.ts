basic.forever(function () {
    for (let i=0; i<10; i++) {
        basic.showIcon(IconNames.Asleep + i)
        basic.pause(500 - i*50)
    }
})
