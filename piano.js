var audios = document.querySelectorAll('audio')
var divs = document.querySelectorAll('div')
var code = 0

function play(index){
    var audio = audios[index]
    audio.load()
    audio.play()
}

window.onkeydown = function(ev){
    if(code != ev.keyCode){
        code = ev.keyCode
        
        if(code >= 49 && code <=57){
            divs[code - 49].classList.add('active')
            play(code - 49)
        }
    }
}

window.onkeyup = function(){
    code = 0
    for(var i = 0; i < divs.length; i++){
        divs[i].classList.remove('active')
    }
}