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



// Rolar tela
document.getElementById('scrollTop').addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: "smooth"});
})

document.getElementById('gamma').addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: "smooth"});
})

// utilizando vh convertido em pixels para manter uma relatividade na scrollagem
const vh = window.innerHeight;
const scrollAmountAbout = 88 * (vh / 100);
const scrollAmountProject = 190 * (vh / 100);

document.getElementById('scrollAbout').addEventListener('click', function()
{
    window.scrollTo({top: scrollAmountAbout, behavior: "smooth"});
})

document.getElementById('scrollProject').addEventListener('click', function()
{
    window.scrollTo({top: scrollAmountProject, behavior: "smooth"});
})

document.getElementById('scrollContact').addEventListener('click', function()
{
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
})


// Mudar tema
const theme = window.localStorage.getItem('theme');
const toggle = document.getElementById('toggleTheme');

if(theme === "dark") document.body.classList.add('dark');

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(theme === "dark") {
        window.localStorage.setItem("theme", "light");
    }
    else
    {
        window.localStorage.setItem("theme", "dark");
    }
});