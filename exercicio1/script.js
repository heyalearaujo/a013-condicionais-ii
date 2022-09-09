const num = Number(prompt("Insira um número"))

if (num % 2 === 0){
    console.log("Este número é divisivel por 2")
    if (num % 3 === 0){
        console.log("Este número é divisivel por 3")

    }else {
        console.log("Não é divisivel por 3")
    }
}else if (num % 3 === 0){
    console.log("Não é divisivel por 2")
}

if (num % 2 === 0 && num % 3 === 0) {
    console.log("Este número é divisivel por 2 e 3!")
}

///Não deu certo.