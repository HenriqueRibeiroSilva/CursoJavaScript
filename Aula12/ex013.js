var agora = new Date()
var diaSem = agora.getDay()
var agora2 = new Date()
var diaNum = agora2.getDate()
switch (diaSem) {
    case 0:
        diaSem = "Domingo"
        break;
    case 1:
        diaSem = "Segunda"
        break;
    case 2:
        diaSem = "Terça"
        break;
    case 3:
        diaSem = "Quarta"
        break;        
    case 4:
        diaSem = "`Quinta`"
        break;        
    case 5:
        diaSem = "Sexta"
        break;        
    case 6:
        diaSem = "Sabado"
        break;        
    default:
        break;
}
var agora = new Date()
var hr = agora.getHours()
var min = new Date()
var minutos = min.getMinutes()
if (hr<12) {
    console.log(`Agora são ${hr}:${minutos} da manhã.`)
} else if(hr>18) {
    console.log(`Agora são ${hr}:${minutos} da noite.`)
} else{
    console.log(`Agora são ${hr}:${minutos} da tarde.`)
}
console.log(`Hoje é dia ${diaNum}, ${diaSem}!`);
