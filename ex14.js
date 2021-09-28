function carregar() {
  var msg = document.getElementById('mensagem')
  var img = document.getElementById('imagem')
  var data = new Date() // data
  var hora = data.getHours() // hora atual
  msg.innerHTML = `Agora são: ${hora} horas `
  var dia = document.getElementById('dia')

  if (hora >= 0 && hora < 12) {
    img.src = 'manhã2.jpg'
    document.body.style.background = '#d47b52c'
    dia.innerHTML = 'Bom dia'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde2.jpg'
    document.body.style.background = '#F3BC6A'
    dia.innerHTML = 'Boa tarde'
  } else {
    img.src = 'noitee2.jpg'
    document.body.style.background = '#4C4B63'
    dia.innerHTML = 'Boa noite'
  }
}
