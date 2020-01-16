const textElement = document.getElementsByClassName('text')[0];
let text = textElement.innerHTML;
const pattern = /[0-9]]+/g;
const textpattern = /практик[а - я]*/g;
//const index = text.indexOf(word); //Find Word By Index

//console.log(index); //Show Index
//console.log('-------');
//console.log(text.split(','));
//console.log(text.search(word));
//console.log(text.match(word));
//console.log(text.replace(word, '!!!'));
console.log(pattern.test(text));

text = text.replace(pattern, '');

console.log(text);

console.log(textpattern.exec(text));

//----------------- clear tags

const tagPattern = /[]/gim;

text = text.replace(tagPattern, '');

console.log(text);

//---------------- Validation

const input = document.getElementById('age');
const button = document.getElementById('checkAge');

button.addEventListener('click', checkAgeRegex);

function checkAge() {
    const text = input.value;
    if(!isNaN(+text))
    {
        if(+text > 0 && +text < 150) {
            input.style.border = "1px solid green";
            return;
        }
    }
    console.log(false);
    input.style.border = "1px solid red"
}

function checkAgeRegex() {
    const isvalid = input.validity.valid;
    console.log(isvalid);
}