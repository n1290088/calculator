function a(v){
    document.querySelector('input').value += v
}

function b(){
    var l = document.querySelector('input').value
    document.querySelector('input').value = l.slice(0,-1)
}

function cl(v){
    document.querySelector('input').value = v
}

function calc(){
    var l = document.querySelector('input').value
    try{
        var f = new Function('return ' + l)
        cl(f().toString())
    }catch(_error){
        cl(_error)
    }
}
