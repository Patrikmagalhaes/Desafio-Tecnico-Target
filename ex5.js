let teste = "!oigátse essen ecnahc amu ad eM"

function inverterString(string) {

  let resultado = ""
// percorreo o indice do array de tras pra frente e armazena em uma variavel
  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i]
  }

  return resultado
}


console.log(inverterString(teste))
