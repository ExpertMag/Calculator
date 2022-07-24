inputNuber = document.getElementById('number')


const arrNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let calc = document.querySelectorAll('#calcClick button')

calc.forEach(function(element) {

  element.addEventListener('click', function(){
    var x = element.innerHTML;
    document.querySelector('#number').value += x;
    if (x == 'C') {
      document.querySelector('#number').value = ''
    }
    if (!arrNumber.includes(x)) {
      document.querySelectorAll('.action button').forEach(function(element) {
        element.setAttribute('disabled', true)
      })
    } else {
      document.querySelectorAll('.action button').forEach(function(element) {
        element.removeAttribute('disabled')
      })
    }
  /*switch(x) { 
    case '1': document.querySelector('#number').value += x; break;
    case '2': document.querySelector('#number').value += x; break;
    case '3': document.querySelector('#number').value += x; break;
    case '4': document.querySelector('#number').value += x; break;
    case '5': document.querySelector('#number').value += x; break;
    case '6': document.querySelector('#number').value += x; break;
    case '7': document.querySelector('#number').value += x; break;
    case '8': document.querySelector('#number').value += x; break;
    case '9': document.querySelector('#number').value += x; break;
    case '0': document.querySelector('#number').value += x; break;
    case 'C': document.querySelector('#number').value = ''; break;
  }*/
  let inputValue = inputNuber.value
  let calculate = inputValue
  console.log(typeof(calculate));

let num = inputValue.replace(/5/ig, '5');
num2 = Number(num);

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  //console.log(stringToSplit);
  console.log(arrayOfStrings);
}

var space = Number(/\d+/g);
var comma = ',';

splitString(inputValue, space);




  })
})

