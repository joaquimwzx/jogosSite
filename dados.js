const faces=['⚀','⚁','⚂','⚃','⚄','⚅'];

function rollDice(){

const dice=document.getElementById('dice');
const result=document.getElementById('result');

dice.classList.add('roll');
result.innerHTML='<p>Rolando os dados...</p>';

setTimeout(()=>{

dice.classList.remove('roll');

const user=Math.floor(Math.random()*6);
const bot=Math.floor(Math.random()*6);

dice.innerHTML=`${faces[user]} ${faces[bot]}`;

let msg='';

if(user>bot){
msg='Você venceu!';
}else if(bot>user){
msg='A IA venceu!';
}else{
msg='Empate!';
}

result.innerHTML=
`<p>Você tirou ${user+1}</p>
<p>IA tirou ${bot+1}</p>
<h2>${msg}</h2>`;

},1500);
}
