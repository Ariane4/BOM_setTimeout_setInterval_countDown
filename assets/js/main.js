//Lev1_2_js-vertiefung_BOM_setTimeout_setInterval
//-------------------------------------------------
//AB Version
//--------------------
// let countDown = 100;
// let btnClick = document.getElementById("btn")

// setInterval(function countDown() {
//     document.getElementsByClassName("zeit")
//     if (btnClick.addEventListener("click"){
//         countDown = countDown--;
//     } else
//     , countDown--)
// })

//Mohammad Version
//--------------------
// let j = 100;
// document.getElementById("btn").addEventListener("click", () => {
//     let zeit = document.getElementsByClassName("zeit")[0].innerHTML;
//     if (zeit == "100%") {
//         let timeId3 = setInterval(() => {
//             j--;
//             document.getElementsByClassName("zeit")[0].innerHTML = `${j}%`;
//             if (j == 0) {
//                 clearInterval(timeId3)
//             }
//         }, 50)
//     }
//     if (zeit == "0%") {
//         let timeId3 = setInterval(() => {
//             j++;
//             document.getElementsByClassName("zeit")[0].innerHTML = `${j}%`;
//             if (j == 100) {
//                 clearInterval(timeId3)
//             }
//         }, 50)
//     }
//     console.log(zeit)
// })

//Lev1_1_js-vertiefung_BOM_setTimeout_setInterval
//------------------------------------------------
//1. Teil hat geklappt!
//---------------------
// setTimeout(function () {
//     document.write("einfach ein Text schreiben")
// }, 2000)

//2. Teil - 1. Versuch alleine
//----------------------
// let today = new Date();
// let zeitAnzeige = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.write(zeitAnzeige)

//2. Teil - 2. Georg Support 
//----------------------
// let countX = 0
// let x = setInterval(() => {
//     console.log(countX)
//     console.log(new Date().toLocaleTimeString())
//     if (countX == 2) {
//         clearInterval(x)
//     }
//     countX++
// }, 1000)

//3. Teil - hat geklappt!
//----------------------
// let i = 10
// let timeId1 = setInterval(() => {
//     if (i < 1) {
//         document.write("endlich Feierabend!")
//     } if (i == 0) {
//         clearInterval(timeId1)
//     } else {
//         document.write(i + "<br>")
//         i--;
//     }
// }, 1000)

//Lev2_1_js-vertiefung_BOM_meldung
//-------------------------------------------
// let j = document.getElementById("count")
// let count = setInterval(() => {
//     j.innerHTML = j.innerHTML * 1 - 1;
//     console.log(j.innerHTML)
//     if (j.innerHTML == 0) {
//         clearInterval(count)
//         document.querySelector(".message").style.display = "none"
//     }
// }, 1000)


// Lev2_2_js-vertiefung CountDown
//-------------------------------------------
// let getMin = new Date().getMinutes()
// console.log(countDownMin)
// let showMin = document.getElementById("minutes")

// var countDown = setInterval()

//Anass Version
//----------------------
let inputUser = document.getElementById("minutes")
let time = document.getElementById("time")
let minutes;
let secondes = 0;
let timeId;
function startMinCountdown() {
    minutes = inputUser.value
    timeId = setInterval(() => {
        if (secondes == 0) {
            minutes--;
            secondes = 59
            formatTime(minutes, secondes)
        } else {
            secondes--
            formatTime(minutes, secondes)
        }
        if (minutes == 0 && secondes == 0) {
            clearInterval(timeId)
        }
        console.log(minutes, secondes)
    }, 50)
}
function pauseMinCountdown() {
    clearInterval(timeId)
}
function restartMinCountdown() {
    minutes = inputUser.value
    timeId = setInterval(() => {
        if (secondes == 0) {
            minutes--;
            secondes = 59
            formatTime(minutes, secondes)
        } else {
            secondes--
            formatTime(minutes, secondes)
        }
        if (minutes == 0 && secondes == 0) {
            clearInterval(timeId)
        }
        console.log(minutes, secondes)
    }, 50)
}

function formatTime(minutes, secondes) {
    if (minutes > 9) {
        if (secondes > 9) {
            time.innerText = `${minutes}:${secondes}`
        } else {
            time.innerText = `${minutes}:0${secondes}`
        }

    } else {
        if (secondes > 9) {
            time.innerText = `${minutes}:${secondes}`
        } else {
            time.innerText = `0${minutes}:0${secondes}`
        }
    }
}

// IDs noch tauschen, damit funktioniert!!!