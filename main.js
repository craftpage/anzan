function makeQuestion(){
    q1 = Math.floor( Math.random () * 10) + 1
    q2 = Math.floor( Math.random () * 10) + 1
    c = ['+','-','×','÷']
    document.getElementById('q1').textContent = q1
    document.getElementById('c').textContent = c[(Math.floor( Math.random () * 10)) % 4]
    document.getElementById('q2').textContent = q2
}

function replaceC(c){
    if(c === '×') {
        c = '*'
    } else if (c === '÷') {
        c = '/'
    }
    return c
}

function checkAnswer() {
    answer = eval(Number(document.getElementById('q1').textContent) + 
        replaceC(document.getElementById('c').textContent) +
        Number(document.getElementById('q2').textContent))
    inputAnswer = Number(document.getElementById('answer').value)
    if (answer === inputAnswer){
        alert('正解')
        document.getElementById('display').textContent = '正解'
    } else {
        alert('不正解')
        document.getElementById('display').textContent = '不正解'
    }
}

window.onload = function (){
    makeQuestion()
}