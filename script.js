const q1 = document.querySelector('.q1')
const q2 = document.querySelector('.q2')
const q3 = document.querySelector('.q3')
const q4 = document.querySelector('.q4')

const outputs = document.querySelector('.outputs')
const naming = document.querySelector(".NamingVersionCtrl")

const admin = document.querySelector(".Admin")
const invest = document.querySelector(".Invest")
const design = document.querySelector(".Design")
const draft = document.querySelector(".Draft")
const ca = document.querySelector(".CA")

q2.classList.add('hidden')
q3.classList.add('hidden')

admin.classList.add('hidden')
invest.classList.add('hidden')
design.classList.add('hidden')
draft.classList.add('hidden')
ca.classList.add('hidden')

outputs.classList.add('hidden')
naming.classList.add('hidden')

function myFunction () {
    q1.classList.add('hidden')
    q2.classList.remove('hidden')
}

function myFunction2 () {
    q2.classList.add('hidden')
    q3.classList.remove('hidden')

}

function myFunction3 () {
    x = document.getElementById("mySelects").selectedIndex
    console.log(x)
    q3.classList.add('hidden')

    if ( x == 0 ) {
        admin.classList.remove('hidden')
    }   
    
    if (x == 1) {
        invest.classList.remove('hidden')
    }
    
    if (x == 2) {
        design.classList.remove('hidden')
    }
    
    if (x == 3) {
        draft.classList.remove('hidden')
    }
    
    if(x == 4) {
        ca.classList.remove('hidden')
    }
}

function myFunction4 () {
    q4.classList.add('hidden')
    naming.classList.remove('hidden')
}

function myFunction5 () {
    naming.classList.add('hidden')
    outputs.classList.remove('hidden')
        // document.querySelector('.outputs').innerHTML = `P:\2022\${x}\${x}\${x}` 

}


