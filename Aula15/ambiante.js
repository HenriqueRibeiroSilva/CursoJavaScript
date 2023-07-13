let num = [5,8,9,1]
num.push(3)
num.sort()
console.log(num)

let pos = num.indexOf(9)
 if (pos == -1) {
    console.log(`O valor não existe!`)
 } else {
    console.log(`O valor 9 está na posição ${pos}`)
 }