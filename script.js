// o 8 se refere a setembro, pois os meses começam no index 0
const birthday = new Date(Date.UTC(2005, 8, 28));
const today = new Date();

let age = today.getFullYear() - birthday.getUTCFullYear();
const month = today.getMonth() - birthday.getUTCMonth();
const day = today.getDate() - birthday.getUTCDate();

if (month < 0 || month == 0 && day < 0) 
{
    age--;
}

document.getElementById('age').innerHTML = age;
