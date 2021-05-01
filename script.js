
function ageCalculate() {
    var birthYear= prompt('Your Birthday Year Please = ');  
    var ageInDays= (2021-birthYear) * 365;
    var h1= document.createElement('h1');
    var answer = document.createTextNode('You are ' + ageInDays + ' days old.');
    h1.setAttribute('id','ageCalculate');
    h1.appendChild(answer);
    document.getElementById('result').appendChild(h1);    
}

function reset() {
    document.getElementById('ageCalculate').remove();
}
