let double = false
let five = false
let ten = false
let score = 0
const showScore = document.getElementById("score")
const multi = document.querySelector(".plus")


function countScore() {
    if (double) {
        score = score + 2
    } else if (five) {
        score = score + 5
    } else if (ten) {
        score = score + 10
    } else {
        score++
    }
    console.log(score)
    showScore.textContent = score
    multi.hidden = false
    setTimeout(() => {
        multi.hidden = true

    }, 100)

}
document.querySelector("#twox").addEventListener("click", function () {
    if (score >= 20) {
        multi.textContent = "+2"
        double = true
    }
})
document.querySelector("#fivex").addEventListener("click", function () {
    if (score >= 100) {
        multi.textContent = "+5"
        double = false
        five = true
    }
})
document.querySelector("#tenx").addEventListener("click", function () {
    if (score >= 1000) {
        multi.textContent = "+10"
        double = false
        five = false
        ten = true
    }
})
