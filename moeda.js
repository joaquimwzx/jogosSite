function flip(choice){

const result = Math.random() < 0.5 ? 'Cara' : 'Coroa';

const coin = document.getElementById('coin');

coin.style.animation = 'none';

setTimeout(()=>{
    coin.style.animation = 'flip 1s ease';
},10);

if(result === 'Cara'){
    coin.src = 'img/cara.png';
}else{
    coin.src = 'img/coroa.png';
}

document.getElementById('result').innerHTML =
`
<p>Resultado: ${result}</p>
<h2>
${choice === result ? 'Você acertou!' : 'Você errou!'}
</h2>
`;
}