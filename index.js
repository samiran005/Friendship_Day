const ghostPage = document.getElementById("ghost")
const ghostSound = document.querySelector('#ghost-sound')
const topGhostPage = document.querySelector('.top')
const friendship = document.querySelector(".friendship");

const begainSwapt = document.getElementById("begain--swapt")
const begain = document.querySelector(".begain")

function friendGo(){
    friendship.removeAttribute("hidden")
}

function ghostGo(){
    ghostPage.removeAttribute("hidden")
    setTimeout(()=>{
        topGhostPage.style.opacity = 0;
        ghostSound.play();
    }, 2000)
    
    setTimeout(()=>{
        ghostPage.style.backgroundImage = "none";
        ghostSound.pause();
    }, 10000)
}

begainSwapt.addEventListener("change", (e)=>{
    let name = begain.value.toLowerCase()
    // console.log(name)
    // console.log(e.target.value)
    if(e.target.value > 90 && !name){
        begainSwapt.value = 0;
        begain.focus()
    }else if(e.target.value > 90 && name == "chitra"){
        friendGo();
    }else if(e.target.value > 90 && name != "chitra"){
        // console.log("you are not pass")
        ghostGo();
    }
})

