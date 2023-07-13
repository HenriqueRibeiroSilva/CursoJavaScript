var agora = new Date()
var hr = agora.getHours()
console.log(`Agora são ${hr} horas.`)
if (hr<12) {
    console.log("bom dia!")
} else if(hr>18) {
    console.log("boa noite!")
} else{
    console.log("boa tarde")
}