const icons={
Pedra:'img/pedra.png',
Papel:'img/papel.png',
Tesoura:'img/tesoura.png'
};

let wins=0;
let losses=0;
let draws=0;

function verificarVencedor(user,bot){

if(user===bot){
return 'draw';
}

if(
(user==='Pedra' && bot==='Tesoura') ||
(user==='Papel' && bot==='Pedra') ||
(user==='Tesoura' && bot==='Papel')
){
return 'win';
}

return 'lose';
}

function atualizarPlacar(){
document.getElementById('w').textContent=wins;
document.getElementById('l').textContent=losses;
document.getElementById('d').textContent=draws;
}

function play(user){

const options=['Pedra','Papel','Tesoura'];
const bot=options[Math.floor(Math.random()*3)];

document.getElementById('user').classList.add('loading');
document.getElementById('bot').classList.add('loading');

document.getElementById('user').src = icons[user];
document.getElementById('bot').src = icons[bot];

setTimeout(()=>{

document.getElementById('user').classList.remove('loading');
document.getElementById('bot').classList.remove('loading');

document.getElementById('user').src = icons[user];
document.getElementById('bot').src = icons[bot];

const result=verificarVencedor(user,bot);

let msg='';

switch(result){

case 'win':
wins++;
msg='Você venceu!';
break;

case 'lose':
losses++;
msg='A IA venceu!';
break;

default:
draws++;
msg='Empate!';
}

document.getElementById('result').innerHTML=
`<strong>Você:</strong> ${user}<br>
<strong>IA:</strong> ${bot}<br><br>
<h2>${msg}</h2>`;

atualizarPlacar();

},1000);
}
