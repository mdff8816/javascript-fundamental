// 1
class Player {
    constructor(name) {
        this.name = name
        this.health = 100
        this.power = 10
    }
}
class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }
    getRandomItem() {
       
    }
}

const player1 = new Player ("budi")
const player2 = new Player ("komeng")
console.log(player1);
console.log(player2);