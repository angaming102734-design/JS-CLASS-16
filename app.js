// alert('hi')

// var kababa Case

// var changCase = myName.toLowerCase()

// var myName ='Ather'

// var userInput =prompt('enter the name');

// var firstLrtter = userInput[0].toUpperCase();

// var remainLetter = userInput.slice(1).toLowerCase();


// var concetinete = firstLrtter + remainLetter;



// if(myName === concetinete){
//     alert('yes')
// }else{
//     alert('No')
// }

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) == "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}