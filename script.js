function contar() {

  var ini = window.document.getElementById('init')
  var en = window.document.getElementById('end')
  var pas = window.document.getElementById('pass')
  const res = window.document.getElementById('res')

  if (ini.value.length == 0 || en.value.length == 0|| pas.value.length == 0) {
        window.alert('[ERRO] Preencha os campos corretamente')
      } else {
        res.innerHTML = 'Contando:'
          var i = Number(ini.value)  // transformando as variaveis em numeros boolean
          var e = Number(en.value)
          var p = Number(pas.value)
          if (i < e) {  // se o inicio for menor que o final, execute esta linha
            //Contagem crescente
            for (var c = i; c <= e; c += p) {
                res.innerHTML += ` ${c}, `
              }
          } else { // se não execute está
            //Contagem regressiva
              for (var c = i; c >= e; c -= p) {
                res.innerHTML += `${c}, `
              } 
          }  
          res.innerHTML += `\u{1F3C1}`  //com emotion no final
  }      
}



