// initializing variables 

const q1 = document.querySelector('.q1')
const q2 = document.querySelector('.q2')
const q3 = document.querySelector('.q3')
const q4 = document.querySelector('.q4')

const admin = document.querySelector(".Admin")
const invest = document.querySelector(".Invest")
const design = document.querySelector(".Design")
const draft = document.querySelector(".Draft")
const ca = document.querySelector(".CA")

const output0 = document.querySelector('.output0')
const output1 = document.querySelector('.output1')
const naming = document.querySelector(".NamingVersionCtrl")
const flsub = document.querySelector(".flsub")

// initial conditions

q2.classList.add('hidden')
q3.classList.add('hidden')

admin.classList.add('hidden')
invest.classList.add('hidden')
design.classList.add('hidden')
draft.classList.add('hidden')
ca.classList.add('hidden')

output0.classList.add('hidden')
output1.classList.add('hidden')
naming.classList.add('hidden')
flsub.classList.add('hidden')

// arrays representing folder structure

let midfol = ["1 Admin", "2 Invest", "3 Design", "4 Draft", "5 CA"]
let subfol0 = ["11 Promo", "12 PM", "13 EMAIL", "19 QM"]
let subfol1 = ["21 Invest Info", "22 Photos", "23 Reports"]
let subfol2 = ["31 BID Packages", "32 BIDs Received", "33 Design", "34 Model"]
let subfol3 = ["41 ISSUED", "42 MARKUPS","43 STRUCT","44 ARCH","45 MECH","46 ELEC","47 LANDSCAPE","48 EXIST", "49 OTHER"]
let subfol4 = ["51 Contract", "52 MM","53 SRR","54 Photos","55 SIs & SDNs","56 RFIs","57 Submittals","58 Shop Dwgs"]

// next btn functions

function myFunction0 () {
    q1.classList.add('hidden')
    q2.classList.remove('hidden')
}

function myFunction2 () {
    q2.classList.add('hidden')
    q3.classList.remove('hidden')
}

function myFunction3 () {
    x = document.getElementById("mySelect6").selectedIndex
    q3.classList.add('hidden')

    if ( x == 0 ) {
        admin.classList.remove('hidden')
        sbfl = subfol0
    }   
    
    if (x == 1) {
        invest.classList.remove('hidden')
        sbfl = subfol1
    }
    
    if (x == 2) {
        design.classList.remove('hidden')
        sbfl = subfol2
    }
    
    if (x == 3) {
        draft.classList.remove('hidden')
        sbfl = subfol3
    }
    
    if(x == 4) {
        ca.classList.remove('hidden')
        sbfl = subfol4
    }
}

function myFunction4 () {
    q4.classList.add('hidden')

    if (document.getElementById("mySelect5").selectedIndex == 1) {
    naming.classList.remove('hidden')
    }

    if ( x == 0 ) {
        y = document.getElementById("mySelect0").selectedIndex
    }   
    
    if (x == 1) {
        y = document.getElementById("mySelect1").selectedIndex
    }
    
    if (x == 2) {
        y = document.getElementById("mySelect2").selectedIndex
    }
    
    if (x == 3) {
        y = document.getElementById("mySelect3").selectedIndex
    }
    
    if(x == 4) {
        y = document.getElementById("mySelect4").selectedIndex
    }

    flsub.classList.remove('hidden')

}

function myFunction5 () {
    if (document.getElementById("mySelect5").selectedIndex == 1) {
        output1.classList.remove('hidden')
        z = document.getElementById("mySelect7").selectedIndex
        document.querySelector('.output1').innerHTML = `${document.getElementById("fname").value}_${document.getElementById("pname").value}_v${z+1}`
    }

    output0.classList.remove('hidden')
    document.querySelector('.output0').innerHTML = `P:\\2022\\${document.getElementById("pnum").value} ${document.getElementById("pnme").value}\\${midfol[x]}\\${sbfl[y]}`
}


