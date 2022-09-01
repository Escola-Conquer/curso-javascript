/*
- Perceba que o código HTML não tem coerência, sabendo disso, através de um script:
- Insira um novo valor para o "volume"
- Exiba o valor atual do "volume" no elemento "span" (Ex: 50%)
- Insira o nome de uma música no campo correspondente

ALGUMAS RESPOSTAS POSSÍVEIS:
*/

let volume = document.getElementById("volume")
let musica = document.getElementById("music")
let valorVolume = document.getElementById("currentVolume")

volume.value = "50"
valorVolume.textContent = `${volume.value} %`

musica.value = "Love of My Life"