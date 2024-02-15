document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita o comportamento padrão de envio do formulário
      calcularIngestao();
    });
  });
  
  function calcularIngestao() {
    // Obter os valores do peso e idade
    var peso = parseFloat(document.getElementById('weight').value);
  
    // Verificar se o valor do peso é um número válido
    if (isNaN(peso)) {
      alert('Por favor, insira um valor válido para o peso.');
      return;
    }
  
    // Calcular a ingestão hídrica (peso x 0.35)
    var ingestaoHidrica = peso * 35;
    var valorFormatado = ingestaoHidrica.toFixed(0);
  
    // Exibir os resultados na tela
    var infosElement = document.getElementById('infos');
    infosElement.classList.remove('hidden');
    
    var valueElement = document.getElementById('value');
    valueElement.innerText = valorFormatado.replace('.',',') + 'ml';

  
    
    
  }

  // function calcularImc() {
  //   // Obter os valores do peso e altura
  //   var peso = parseFloat(document.getElementById('weight').value);
  //   var altura = parseFloat(document.getElementById('height').value);
  
  //   // Verificar se o valor do peso/altura é um número válido
  //   if (isNaN(peso && altura)) {
  //     alert('Por favor, insira um valor válido para o peso.');
  //     return;
  //   }
  
  //   // Calcular o IMC
  //   var calculoImc = (peso /(altura * altura));
  
  //   // Exibir os resultados na tela
  //   var infosElement = document.getElementById('infos');
  //   infosElement.classList.remove('hidden');
    
  //   var valueElement = document.getElementById('value');
  //   valueElement.innerText = calculoImc.toFixed(0).replace('.',',') + 'ml';

  
   
  // }
  