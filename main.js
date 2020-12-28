function makeQuestion(){
    c = ['+','-','×','÷']
    c4 = c[(Math.floor( Math.random () * 10)) % 4]
    if(c4 === '+' || c4 === '-'){
        q1 = Math.floor( Math.random () * 100) + 1
        q2 = Math.floor( Math.random () * 100) + 1
    } else if (c4 === '÷') {
        q1 = Math.floor( Math.random () * 10) + 1
        even = [2,4,6,8]
        q2 = even[Math.floor(Math.random () * 10) % 4]
    } else {
        q1 = Math.floor( Math.random () * 10) + 1
        q2 = Math.floor( Math.random () * 10) + 1
    }
    document.getElementById('q1').textContent = q1
    document.getElementById('c').textContent = c4
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