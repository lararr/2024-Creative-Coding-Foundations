
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('d');
const d = document.getElementById('c');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');
const m = document.getElementById('m');
const n = document.getElementById('n');
const o = document.getElementById('o');
const p = document.getElementById('p');
const q = document.getElementById('q');
const r = document.getElementById('r');
const s = document.getElementById('s');
const t = document.getElementById('t');
const u = document.getElementById('u');
const v = document.getElementById('v');
const w = document.getElementById('w');
const x = document.getElementById('x');
const y = document.getElementById('y');
const z = document.getElementById('z');
const buttonSpace = document.getElementById('button-space');
const buttonClear = document.getElementById('button-clear');
const outputParagraph = document.getElementById('output');
const buttons = document.querySelectorAll('button');

// Function to handle button clicks
let clickCount = 0;
function handleButtonClick() {
    clickCount++; // Increment the counter on each click

    // Check if the button has been clicked 10 times
    if (clickCount === 20) {
        outputParagraph.innerText += '\r\n' + 'Wake up...' + '\r\n' ;
        
    }
    if (clickCount === 30) {
        outputParagraph.innerText += '\r\n'+ 'the matrix has you' + '\r\n' ;
        clickCount = 0; // Reset the counter
    }
}
// Attach the click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});


// count the number of time the clear button is click but it s not working
let clickCountClear = 0;
function handleButtonClickClear() {
    clickCountClear++; // Increment the counter on each click

    // Check if the button has been clicked 10 times
    if (clickCountClear === 5) {
        alert('Morphoeus is speaking to u\r\n');
    }
}
// Attach the click event listener to the clear button must be soemthing wrong with this
buttonClear.addEventListener('click', handleButtonClickClear);
buttonClear.addEventListener('click', () => { 
    outputParagraph.innerText = '>';
})



//if the user press both ctrl and x on the keyboard
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'x') {
        outputParagraph.innerText += 'Follow the white rabbit\r\n';
    }
});
//if the user press the key esc on the keyboard
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        outputParagraph.innerText += 'Knock knock\r\n';
    }
});

// cat gif is not working :'( so i add a cat meme image
document.addEventListener('keydown', function(event) {
    if (event.key === 'm') {
        outputParagraph.innerHTML = '<img src="https://i.pinimg.com/enabled/564x/c1/7b/34/c17b345e50f9faebd384e01c3c622b1f.jpg">';
    }
});

function BinaryCode(decimal_number) {
    let binary_number = "";

    //give the binary_number
    while (decimal_number > 0) {
        let remainder = decimal_number % 2;
        binary_number = String(remainder) + binary_number;
        decimal_number = Math.floor(decimal_number / 2);
    }

    //add the zero for the 8bit format
    while (binary_number.length < 5) {
        binary_number = "0" + binary_number;
    }
    return binary_number;
  }

//space button
buttonSpace.addEventListener('click', () => { 
    outputParagraph.innerText += '  ';
})

//all the different key :
a.addEventListener('click', () => { 
    let binary_code = BinaryCode(1)
    //"001" id for lower caps
    outputParagraph.innerText += "011" + binary_code ;

})

b.addEventListener('click', () => { 
    let binary_code = BinaryCode(2)
    outputParagraph.innerText += "011" + binary_code ;
})

c.addEventListener('click', () => { 
    let binary_code = BinaryCode(3)
    outputParagraph.innerText += "011" + binary_code  ;
})

d.addEventListener('click', () => { 
    let binary_code = BinaryCode(4)
    outputParagraph.innerText += "011" + binary_code  ;
})

e.addEventListener('click', () => { 
    let binary_code = BinaryCode(5)
    outputParagraph.innerText += "011" + binary_code ;
})

f.addEventListener('click', () => { 
    let binary_code = BinaryCode(6)
    outputParagraph.innerText += "011" + binary_code  ;
})

g.addEventListener('click', () => { 
    let binary_code = BinaryCode(7)
    outputParagraph.innerText += "011" + binary_code  ;
})

h.addEventListener('click', () => { 
    let binary_code = BinaryCode(8)
    outputParagraph.innerText += "011" + binary_code ;
})

i.addEventListener('click', () => { 
    let binary_code = BinaryCode(9)
    outputParagraph.innerText += "011" + binary_code  ;
})

j.addEventListener('click', () => { 
    let binary_code = BinaryCode(10)
    outputParagraph.innerText += "011" + binary_code  ;
})

k.addEventListener('click', () => { 
    let binary_code = BinaryCode(11)
    outputParagraph.innerText += "011" + binary_code  ;
})

l.addEventListener('click', () => { 
    let binary_code = BinaryCode(12)
    outputParagraph.innerText += "011" + binary_code ;
})

m.addEventListener('click', () => { 
    let binary_code = BinaryCode(13)
    outputParagraph.innerText += "011" + binary_code ;
})
n.addEventListener('click', () => { 
    let binary_code = BinaryCode(14)
    outputParagraph.innerText += "011" + binary_code ;
})
o.addEventListener('click', () => { 
    let binary_code = BinaryCode(15)
    outputParagraph.innerText += "011" + binary_code ;
})
p.addEventListener('click', () => { 
    let binary_code = BinaryCode(16)
    outputParagraph.innerText += "011" + binary_code ;
})
q.addEventListener('click', () => { 
    let binary_code = BinaryCode(17)
    outputParagraph.innerText += "011" + binary_code ;
})
r.addEventListener('click', () => { 
    let binary_code = BinaryCode(18)
    outputParagraph.innerText += "011" + binary_code ;
})
s.addEventListener('click', () => { 
    let binary_code = BinaryCode(19)
    outputParagraph.innerText += "011" + binary_code ;
})
t.addEventListener('click', () => { 
    let binary_code = BinaryCode(20)
    outputParagraph.innerText += "011" + binary_code ;
})
u.addEventListener('click', () => { 
    let binary_code = BinaryCode(21)
    outputParagraph.innerText += "011" + binary_code ;
})
v.addEventListener('click', () => { 
    let binary_code = BinaryCode(22)
    outputParagraph.innerText += "011" + binary_code ;
})
w.addEventListener('click', () => { 
    let binary_code = BinaryCode(23)
    outputParagraph.innerText += "011" + binary_code ;
})
x.addEventListener('click', () => { 
    let binary_code = BinaryCode(24)
    outputParagraph.innerText += "011" + binary_code ;
})

y.addEventListener('click', () => { 
    let binary_code = BinaryCode(25)
    outputParagraph.innerText += "011" + binary_code ;
})
z.addEventListener('click', () => { 
    let binary_code = BinaryCode(26)
    outputParagraph.innerText += "011" + binary_code ;
})