namespace MapConnectionKind {
    export const algo = MapConnectionKind.create()
}
function giveIntroduction () {
    myTextSprite = fancyText.create("galleta del dulzor", 0, 5, fancyText.defaultArcade)
    myTextSprite.setPosition(80, 20)
    myTextSprite.startEffect(effects.confetti)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("1 jugador", img`
        . 2 2 2 . 
        2 2 2 2 2 
        2 2 2 2 2 
        2 2 2 2 2 
        . 2 2 2 . 
        . . b . . 
        . f b f . 
        f f b f f 
        f f f f f 
        . f f f . 
        `),
    miniMenu.createMenuItem("2 jugadores", img`
        . 2 2 2 . . . . 9 9 9 . 
        2 2 2 2 2 . . 9 9 9 9 9 
        2 2 2 2 2 . . 9 9 9 9 9 
        2 2 2 2 2 . . 9 9 9 9 9 
        . 2 2 2 . . . . 9 9 9 . 
        . . b . . . . . . b . . 
        . f b f . . . . f b f . 
        f f b f f . . f f b f f 
        f f f f f . . f f f f f 
        . f f f . . . . f f f . 
        `),
    miniMenu.createMenuItem("3 jugadores", img`
        . 2 2 2 . . . . 9 9 9 . . . . 7 7 7 . 
        2 2 2 2 2 . . 9 9 9 9 9 . . 7 7 7 7 7 
        2 2 2 2 2 . . 9 9 9 9 9 . . 7 7 7 7 7 
        2 2 2 2 2 . . 9 9 9 9 9 . . 7 7 7 7 7 
        . 2 2 2 . . . . 9 9 9 . . . . 7 7 7 . 
        . . b . . . . . . b . . . . . . b . . 
        . f b f . . . . f b f . . . . f b f . 
        f f b f f . . f f b f f . . f f b f f 
        f f f f f . . f f f f f . . f f f f f 
        . f f f . . . . f f f . . . . f f f . 
        `),
    miniMenu.createMenuItem("4 jugadores", img`
        . 2 2 2 . . . . 9 9 9 . . . . 7 7 7 . . . . 5 5 5 . 
        2 2 2 2 2 . . 9 9 9 9 9 . . 7 7 7 7 7 . . 5 5 5 5 5 
        2 2 2 2 2 . . 9 9 9 9 9 . . 7 7 7 7 7 . . 5 5 5 5 5 
        2 2 2 2 2 . . 9 9 9 9 9 . . 7 7 7 7 7 . . 5 5 5 5 5 
        . 2 2 2 . . . . 9 9 9 . . . . 7 7 7 . . . . 5 5 5 . 
        . . b . . . . . . b . . . . . . b . . . . . . b . . 
        . f b f . . . . f b f . . . . f b f . . . . f b f . 
        f f b f f . . f f b f f . . f f b f f . . f f b f f 
        f f f f f . . f f f f f . . f f f f f . . f f f f f 
        . f f f . . . . f f f . . . . f f f . . . . f f f . 
        `)
    )
    while (true) {
        fancyText.setColor(myTextSprite, 2)
        pause(500)
        fancyText.setColor(myTextSprite, 3)
        pause(500)
        fancyText.setColor(myTextSprite, 4)
        pause(500)
        fancyText.setColor(myTextSprite, 5)
        pause(500)
        fancyText.setColor(myTextSprite, 6)
        pause(500)
        fancyText.setColor(myTextSprite, 7)
        pause(500)
        fancyText.setColor(myTextSprite, 8)
        pause(500)
        fancyText.setColor(myTextSprite, 9)
        pause(500)
        fancyText.setColor(myTextSprite, 10)
        pause(500)
        fancyText.setColor(myTextSprite, 11)
        pause(500)
        fancyText.setColor(myTextSprite, 12)
        pause(500)
        fancyText.setColor(myTextSprite, 13)
        pause(500)
        fancyText.setColor(myTextSprite, 14)
        pause(500)
    }
}
controller.combos.attachCombo("A+B", function () {
    emojis = miniMenu.createMenu(
    miniMenu.createMenuItem(":-)"),
    miniMenu.createMenuItem(":-("),
    miniMenu.createMenuItem("XD")
    )
    emojis.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selection == ":-)") {
        	
        } else if (selection == ":-(") {
        	
        } else if (selection == "XD") {
        	
        } else {
        	
        }
    })
})
let emojis: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let myTextSprite: fancyText.TextSprite = null
giveIntroduction()
