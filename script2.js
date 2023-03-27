// const img = document.querySelector('.content');
// img.style.backgroundColor = "lightgrey";
 
// function ubahBg() {
//     img.style.backgroundColor = "lightgrey";
// }
// const playerChoice = document.getElementById('content-3 img');
// playerChoice.forEach(function(choice) {
//     choice.addEventListener('click', function() {
//         const pilihanComputer = computerChoice();
//         const pilihanPlayer = choice.classname;
//         const hasil = Hasil(pilihanComputer,pilihanPlayer);

//         const hasilPermainan = document.getElementById('content-2 h1');
//         hasilPermainan.innerHTML = hasil;
//     })
// }

// )

// class suitBatuGuntingKertas {
//     constructor() {
//         this.playerName = player;
//         this.botName = computer;
//         this.playerChoice;

//     }


//    pilihanPlayer(){
//     const option = document.getElementsByClassName(".playerChoice img");
//     option.forEach(function(pilihan) {
//     pilihan.addEventListener("click", function() {
//         // console.log(pilihan);
//         const pilihanPlayer = pilihan.className;
//     })
//   });

//    }
// }

// function pickOption() {
//     const player = pilihanPlayer();
// }
// function tentukanHasil() {
//     if( player === computer ) {
//         return "SERI!";
//     }else if( player === "batu" ) {
//         return ( computer === "gunting-2" ) ? "MENANG!" : "KALAH!";
//     }else if( player === "kertas" ) {
//         return (computer === "batu-2" ) ? "MENANG!" : "KALAH!";
//     }else if( player === "gunting" ) {
//         return (computer === "kertas-2" ) ? "MENANG!" : "KALAH!";
//     }  
// }
// const playerElemen = document.getElementById(playerChoice)
// this.playerChoice = playerElemen.value
// const computerElemen = document.getElementById(computerChoice)
// this.computerChoice = computerElemen.value
 
// class suitBatuGuntingKertas {
//     constructor() {
//         // this.playerName = "PLAYER 1"
//         // this.botName = "COM"
//         this.playerChoice
//         this.computerChoice;
//         this.winner;
//     }
    
    function computerChoice() {
        const comp = Math.random();
        if(comp < 0.34) {
            return "batu";
        }else if(comp >= 0.34 && comp < 0.67) {
            return "kertas";
        }else {
            return "gunting";
        }
        
    }



// }
    
// function resultPermainan() {
//       const option = document.querySelectorAll(".playerChoice");
//       option.forEach(function(pilihan) {
//         pilihan.addEventListener("click", function() {
//             const pilihanComp = computerChoice();
//             const pilihanPlayer = pilihan.className;
//             const hasil = winner(pilihanPlayer,pilihanComp)

//         })
//       });


// function 
//     const player = document.getElementById("playerChoice")
//     this.playerChoice = player.value;
//     const computer = document.getElementById("computerChoice")
//     this.computerChoice = computer.value; 


//     // console.log("kamu memilih",hasilSuit.playerChoice);
// }

// class suitBatuGuntingKertas {
//     constructor() {
//         this.C
//     }
    
//     compChoice() {
//         const comp = Math.random();
//        if(comp < 0.34) {
//            return "batu-2";
//        }else if(comp >= 0.34 && comp < 0.67) {
//            return "kertas-2";
//        }else {
//            return "gunting-2";
//        }
//    }
   
//    winner(player,comp) {
//            if(player === "batu" && comp === "gunting"){
//                return "PLAYER 1 WIN";
//            }else if(player === "batu" && comp === "kertas"){
//                return "COM WIN";
//            }else if(player === "kertas" && comp === "batu"){
//                return "PLAYER 1 WIN";
//            }else if(player === "kertas" && comp === "gunting"){
//                return "COM WIN";
//            }else if(player === "gunting" && comp === "kertas"){
//                return "PLAYER 1 WIN";
//            }else if(player === "gunting" && comp === "batu"){
//                return "COM WIN";
//            }else{
//                return "DRAW";
//            }
//    }

// }

// const pilihanComp = compChoice();
        // const pilihanPlayer = pilihan.className;
        // const hasil = winner(pilihanPlayer,pilihanComp)