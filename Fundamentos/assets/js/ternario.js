const elMayor=(a,b)=>{
    return (a>b)?a:b;
}

const elMayor2=(a,b)=> (a>b)?a:b;
console.log(elMayor(20,14));


const tieneMembresia =(miembro)=> miembro ? '2dolares':'10 dolares';
console.log(tieneMembresia(true));


const amigos =false;
const amigosArr=[
    'peter',
    'naruto',
    'kakashi',
    amigos?'gara':'itachi'
];

console.log(amigosArr);

const nota=71;
const grado =nota >= 95 ? 'A+':
             nota >= 90 ? 'A':
             nota >= 85 ? 'B':
             nota >= 70 ? 'C': 'F';


console.log({nota, grado});

